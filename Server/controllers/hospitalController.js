const Hospital = require('../models/hospitalModel');
const logger = require('../utils/logger');
const { nanoid } = require('nanoid');

exports.getList = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        const hospitalList = hospitals.map(h => ({
            PIN: h.hospital_pin,
            Name: h.name
        }));
        res.json(hospitalList);
        logger.info('Hospital', 'Hospital list retrieved', { count: hospitals.length });
    } catch (error) {
        logger.error('Hospital', 'Get hospital list error', error);
        res.status(500).json({ message: "Error retrieving hospital list" });
    }
};

exports.createHospital = async (req, res) => {
    try {
        const { name, address, province, district, phoneNumber, email } = req.body;
        prefix = "HOSP_";
        const newHospital = new Hospital({
            hospital_pin: prefix + nanoid(10),
            name,
            address,
            province,
            district,
            phoneNumber,
            email
        });
        await newHospital.save();
        res.status(201).json({ message: "Hospital saved successfully" });
        logger.info('Hospital', 'New hospital saved', { hospitalPin: newHospital.hospital_pin });
    } catch (error) {
        logger.error('Hospital', 'Save hospital error', error);
        res.status(500).json({ message: "Error saving hospital" });
    }
};