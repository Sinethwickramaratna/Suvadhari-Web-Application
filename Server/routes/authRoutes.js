const express = require("express");
const router = express.Router();
const VerificationCode = require("../models/VerificationCode");
const PendingRegistration = require("../models/PendingRegistration");
const sendVerificationEmail = require("../utils/sendEmail");
const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");
const Admin = require("../models/adminModel");
const Pharmacy = require("../models/pharmacyModel");

function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

/*
SEND VERIFICATION CODE
*/
router.post("/send-code", async (req, res) => {
    try {
        const { email, role, data } = req.body;

        if (!email) return res.status(400).json({ message: "Email is required" });

        const code = generateCode();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        // Save/Update pending registration data
        console.log(`[AuthRoute] Storing pending registration for ${email} (${role})`);
        await PendingRegistration.deleteMany({ email });
        await PendingRegistration.create({ email, role, data });

        // Save/Update verification code
        console.log(`[AuthRoute] Generating verification code for ${email}`);
        await VerificationCode.deleteMany({ email });
        await VerificationCode.create({ email, code, expiresAt });

        console.log(`[AuthRoute] Sending email to ${email}`);
        const firstName = data.firstName || "User";
        await sendVerificationEmail(email, code, firstName, role);

        res.json({ message: "Verification code sent" });
        console.log(`Verification code sent to ${email} (expires at ${expiresAt})`);
    } catch (error) {
        console.error("Error sending code:", error);
        res.status(500).json({ message: "Error sending verification code" });
        console.log(`Failed to send verification code to ${email}`);
    }
});

const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

/*
VERIFY CODE & SAVE DATA
*/
router.post("/verify-code", async (req, res) => {
    try {
        const { email, code } = req.body;

        const record = await VerificationCode.findOne({ email, code });

        if (!record) return res.status(400).json({ message: "Invalid code" });
        if (record.expiresAt < new Date()) {
            console.log(`Verification code for ${email} has expired`);
            return res.status(400).json({ message: "Code expired" });
        }

        const pending = await PendingRegistration.findOne({ email });
        if (!pending) {
            console.log(`No pending registration found for ${email}`);
            return res.status(400).json({ message: "No pending registration found" });
        }

        // Process data before saving to permanent collection
        const { role, data } = pending;
        console.log(`[AuthRoute] Verification code match for ${email}. Role: ${role}`);

        // Hashing and PIN generation (Logic mirrored from controllers)
        console.log(`[AuthRoute] Hashing sensitive data and generating PIN for ${email}`);

        if (!data.password || !data.idNumber) {
            console.error('[AuthRoute] Missing password or idNumber in pending data:', data);
            throw new Error('Registration data is incomplete (missing password or idNumber)');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const hashedIdNumber = await bcrypt.hash(data.idNumber, 10);

        let prefix = "U_";
        if (role === 'Patient') prefix = "P_";
        else if (role === 'Doctor') prefix = "D_";
        else if (role === 'Admin') prefix = "A_";
        else if (role === 'Pharmacy') prefix = "Ph_";

        const person_pin = prefix + nanoid(10);

        // Prepare final object
        const finalData = {
            ...data,
            person_pin,
            password: hashedPassword,
            idNumber: hashedIdNumber,
        };

        // Handle Gender field naming inconsistencies if any
        if (role === 'Patient') {
            finalData.gender = data.Gender;
        }

        let newUser;
        if (role === 'Patient') newUser = new Patient(finalData);
        else if (role === 'Doctor') newUser = new Doctor(finalData);
        else if (role === 'Admin') newUser = new Admin(finalData);
        else if (role === 'Pharmacy') newUser = new Pharmacy(finalData);

        console.log(`[AuthRoute] Persisting ${role} record to database: ${email}`);
        await newUser.save();

        // Clean up
        console.log(`[AuthRoute] Cleaning up verification records for ${email}`);
        await VerificationCode.deleteMany({ email });
        await PendingRegistration.deleteMany({ email });

        res.json({ message: "Email verified and account created successfully" });
        console.log(`Account created for ${email}`);
    } catch (error) {
        console.error("Error verifying code:", error);
        res.status(500).json({ message: "Error during verification" });
    }
});

module.exports = router;
