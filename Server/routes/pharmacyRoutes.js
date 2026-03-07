const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController');

router.post('/register', pharmacyController.registerPharmacy);

module.exports = router;