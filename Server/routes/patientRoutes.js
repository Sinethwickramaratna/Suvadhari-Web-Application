const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Patient profile routes (Example protected route)
// router.get('/profile', protect, authorize('Patient'), (req, res) => res.json(req.user));

module.exports = router;