const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const familyMemberController = require('../controllers/familyMemberController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Patient profile routes (Example protected route)
// router.get('/profile', protect, authorize('Patient'), (req, res) => res.json(req.user));
router.get('/dashboard', protect, authorize('Patient'), patientController.getDashboard);

// Family Member routes
router.get('/family/search', protect, authorize('Patient'), familyMemberController.searchPatients);
router.get('/family/list', protect, authorize('Patient'), familyMemberController.getFamilyMembers);
router.post('/family/add', protect, authorize('Patient'), familyMemberController.addFamilyMember);
router.post('/family/remove', protect, authorize('Patient'), familyMemberController.removeFamilyMember);

module.exports = router;