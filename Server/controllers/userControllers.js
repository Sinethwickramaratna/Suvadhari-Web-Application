const User = require('../models/User');
const bcrypt = require('bcrypt');

/**
 * @desc    Get all users
 * @route   GET /api/user
 * @access  Private/Admin (Hypothetical)
 */
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        console.error("GetUsers error:", error);
        res.status(500).json({ message: "Error retrieving users" });
    }
};

/**
 * @desc    Create a new user
 * @route   POST /api/user
 * @access  Private/Admin (Hypothetical)
 */
exports.createUser = async (req, res) => {
    try {
        const { email, password, role, profileId } = req.body;

        // Validation
        if (!email || !password || !role || !profileId) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            email,
            password: hashedPassword,
            role,
            profileId
        });

        // Prepare response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json(userResponse);
    } catch (error) {
        console.error("CreateUser error:", error);
        res.status(500).json({ message: "Error creating user" });
    }
};
