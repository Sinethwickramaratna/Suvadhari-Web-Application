const Patient = require('../models/patientModel');
const logger = require('../utils/logger');

// Profile logic for patients can be added here (e.g., getProfile, updateProfile)

exports.getDashboard = async (req, res) => {
    try {
        const patient = await Patient.findOne({ person_pin: req.user.profileId });
        if (!patient) return res.status(404).json({ message: "Patient profile not found" });

        const age = patient.dateOfBirth ? Math.floor((Date.now() - new Date(patient.dateOfBirth).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) : null;

        res.json({
            message: "Welcome to your dashboard",
            patient: {
                patientId: patient.person_pin,
                name: patient.firstName + " " + patient.lastName,
                age: age,
                weight: patient.weight,
                height: patient.height,
                bloodType: patient.bloodType,
            },
        });
        logger.info('Patient', 'Dashboard data retrieved', { patientId: patient.person_pin });
    } catch (error) {
        logger.error('Patient', 'Dashboard error', error);
        res.status(500).json({ message: "Error retrieving dashboard data" });
    }
};
