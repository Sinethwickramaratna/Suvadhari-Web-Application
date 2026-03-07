const User = require("../models/User");
const PendingRegistration = require("../models/PendingRegistration");
const VerificationCode = require("../models/VerificationCode");
const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");
const Admin = require("../models/adminModel");
const Pharmacy = require("../models/pharmacyModel");
const sendVerificationEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const jwt = require("jsonwebtoken");

const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.sendCode = async (req, res) => {
    try {
        const { email, role, data } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const code = generateCode();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        console.log(`[AuthController] Storing pending registration for ${email} (${role})`);
        await PendingRegistration.deleteMany({ email });
        await PendingRegistration.create({ email, role, data });

        console.log(`[AuthController] Generating verification code for ${email}`);
        await VerificationCode.deleteMany({ email });
        await VerificationCode.create({ email, code, expiresAt });

        console.log(`[AuthController] Sending email to ${email}`);
        const firstName = data.firstName || "User";
        await sendVerificationEmail(email, code, firstName, role);

        res.json({ message: "Verification code sent" });
    } catch (error) {
        console.error("Error sending code:", error);
        res.status(500).json({ message: "Error sending verification code" });
    }
};

exports.verifyCode = async (req, res) => {
    try {
        const { email, code } = req.body;
        const record = await VerificationCode.findOne({ email, code });

        if (!record) return res.status(400).json({ message: "Invalid code" });
        if (record.expiresAt < new Date()) {
            return res.status(400).json({ message: "Code expired" });
        }

        const pending = await PendingRegistration.findOne({ email });
        if (!pending) return res.status(400).json({ message: "No pending registration found" });

        const { role, data } = pending;
        console.log(`[AuthController] Verification success for ${email}. Creating ${role} profile...`);

        // 1. Prepare Profile Data (Sensitive data hashed separately)
        const hashedIdNumber = await bcrypt.hash(data.idNumber, 10);
        const hashedPassword = await bcrypt.hash(data.password, 10); // Still needed for User model

        let prefix = "U_";
        if (role === 'Patient') prefix = "P_";
        else if (role === 'Doctor') prefix = "D_";
        else if (role === 'Admin') prefix = "A_";
        else if (role === 'Pharmacy') prefix = "Ph_";

        const person_pin = prefix + nanoid(10);

        const profileData = {
            ...data,
            person_pin,
            idNumber: hashedIdNumber,
        };

        if (role === 'Patient') profileData.gender = data.Gender;

        // 2. Create Role-Specific Profile
        let profile;
        if (role === 'Patient') profile = new Patient(profileData);
        else if (role === 'Doctor') profile = new Doctor(profileData);
        else if (role === 'Admin') profile = new Admin(profileData);
        else if (role === 'Pharmacy') profile = new Pharmacy(profileData);

        await profile.save();
        console.log(`[AuthController] ${role} profile created with ID: ${profile._id}`);

        // 3. Create Central User Record
        const newUser = new User({
            email,
            password: hashedPassword,
            role,
            profileId: person_pin
        });

        await newUser.save();
        console.log(`[AuthController] User record created for ${email}`);

        // 4. Cleanup
        await VerificationCode.deleteMany({ email });
        await PendingRegistration.deleteMany({ email });

        res.json({ message: "Account created successfully" });
    } catch (error) {
        console.error("Error verifying code:", error);
        res.status(500).json({ message: "Error during verification" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ message: "Invalid email or password" });

        // Verify role match
        if (user.role !== role) {
            return res.status(401).json({ message: `Access denied. This account is registered as a ${user.role}.` });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

        // Generate JWT
        const token = jwt.sign(
            { userId: user._id, role: user.role, profileId: user.profileId, email: user.email },
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );

        // Set Cookie
        const maxAge = process.env.JWT_EXPIRES_IN?.endsWith('d')
            ? parseInt(process.env.JWT_EXPIRES_IN) * 24 * 60 * 60 * 1000
            : 24 * 60 * 60 * 1000;

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax',
            maxAge: maxAge
        });

        res.json({
            message: "Login successful",
            user: {
                email: user.email,
                role: user.role,
                profileId: user.profileId
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error during login" });
    }
};

exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({
            user: {
                email: user.email,
                role: user.role,
                profileId: user.profileId
            }
        });
    } catch (error) {
        console.error("GetMe error:", error);
        res.status(500).json({ message: "Error retrieving user data" });
    }
};

const sendResetEmail = require("../utils/sendResetEmail");

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "No account found with this email" });

        const code = generateCode();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

        await VerificationCode.deleteMany({ email });
        await VerificationCode.create({ email, code, expiresAt });

        // Get firstName for the email
        let firstName = "User";
        if (user.role === 'Patient') {
            const patient = await Patient.findOne({ person_pin: user.profileId });
            firstName = patient?.firstName || "User";
        } else if (user.role === 'Doctor') {
            const doctor = await Doctor.findOne({ person_pin: user.profileId });
            firstName = doctor?.firstName || "User";
        }

        await sendResetEmail(email, code, firstName);

        res.json({ message: "Password reset code sent to your email" });
    } catch (error) {
        console.error("Forgot password error:", error);
        res.status(500).json({ message: "Error processing request" });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { email, code, newPassword } = req.body;
        if (!email || !code || !newPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const record = await VerificationCode.findOne({ email, code });
        if (!record) return res.status(400).json({ message: "Invalid or incorrect code" });
        if (record.expiresAt < new Date()) {
            return res.status(400).json({ message: "Token has expired" });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        await VerificationCode.deleteMany({ email });

        res.json({ message: "Password reset successful. You can now login." });
    } catch (error) {
        console.error("Reset password error:", error);
        res.status(500).json({ message: "Error resetting password" });
    }
};

exports.logout = async (req, res) => {
    res.clearCookie('token');
    res.json({ message: "Logged out successfully" });
    console.log("[AuthController] User logged out successfully");
};
