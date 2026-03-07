const mongoose = require("mongoose");

const pendingRegistrationSchema = new mongoose.Schema({
    role: { type: String, required: true, enum: ['Patient', 'Doctor', 'Admin', 'Pharmacy'] },
    data: { type: Object, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: 3600 } // Auto-delete after 1 hour if not verified
});

module.exports = mongoose.model("PendingRegistration", pendingRegistrationSchema);
