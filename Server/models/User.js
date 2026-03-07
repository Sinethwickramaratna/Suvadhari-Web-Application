const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Patient", "Doctor", "Admin", "Pharmacy"],
        required: true
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "role"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
