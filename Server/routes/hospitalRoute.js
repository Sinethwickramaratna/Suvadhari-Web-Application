const hospitalController = require('../controllers/hospitalController');
const express = require('express');
const router = express.Router();

// Route to get list of hospitals
router.get('/list', hospitalController.getList);

module.exports = router;