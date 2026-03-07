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
        await PendingRegistration.deleteMany({ email });
        await PendingRegistration.create({ email, role, data });

        // Save/Update verification code
        await VerificationCode.deleteMany({ email });
        await VerificationCode.create({ email, code, expiresAt });

        await sendVerificationEmail(email, code);

        res.json({ message: "Verification code sent" });
    } catch (error) {
        console.error("Error sending code:", error);
        res.status(500).json({ message: "Error sending verification code" });
    }
});

/*
VERIFY CODE & SAVE DATA
*/
router.post("/verify-code", async (req, res) => {
    try {
        const { email, code } = req.body;

        const record = await VerificationCode.findOne({ email, code });

        if (!record) return res.status(400).json({ message: "Invalid code" });
        if (record.expiresAt < new Date()) return res.status(400).json({ message: "Code expired" });

        const pending = await PendingRegistration.findOne({ email });
        if (!pending) return res.status(400).json({ message: "No pending registration found" });

        // Save to permanent collection based on role
        const { role, data } = pending;
        let newUser;

        if (role === 'Patient') newUser = new Patient(data);
        else if (role === 'Doctor') newUser = new Doctor(data);
        else if (role === 'Admin') newUser = new Admin(data);
        else if (role === 'Pharmacy') newUser = new Pharmacy(data);

        await newUser.save();

        // Clean up
        await VerificationCode.deleteMany({ email });
        await PendingRegistration.deleteMany({ email });

        res.json({ message: "Email verified and account created successfully" });
    } catch (error) {
        console.error("Error verifying code:", error);
        res.status(500).json({ message: "Error during verification" });
    }
});

module.exports = router;
