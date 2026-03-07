const Pharmacy = require('../models/pharmacyModel');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');

exports.registerPharmacy = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      pharmacyName,
      email,
      phoneNumber,
      Gender,
      dateOfBirth,
      address,
      idNumber,
      pharmacyLicenseNumber,
      password,
      confirmPassword
    } = req.body;

    console.log('Received pharmacy registration data:', req.body);

    if (password !== confirmPassword) {
      console.log('Password and confirm password do not match');
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log('Password does not meet complexity requirements');
      return res.status(400).json({ message: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character' });
    }

    const person_pin = "Ph_" + nanoid(10);
    const hashedIdNumber = await bcrypt.hash(idNumber, 10);
    const existingPharmacy = await Pharmacy.findOne({ $or: [{ email }, { person_pin }, { idNumber: hashedIdNumber }, { pharmacyLicenseNumber }] });

    if (existingPharmacy) {
      console.log('Pharmacy with this email, person pin, ID number, or license number already exists');
      return res.status(400).json({ message: 'Pharmacy with this email, person pin, ID number, or license number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newPharmacy = new Pharmacy({
      person_pin,
      firstName,
      lastName,
      fullName,
      pharmacyName,
      email,
      phoneNumber,
      Gender,
      dateOfBirth,
      address,
      idNumber: hashedIdNumber,
      pharmacyLicenseNumber,
      password: hashedPassword,
    });
    
    await newPharmacy.save();
    res.status(201).json({ message: 'Pharmacy registered successfully' });
  } catch (error) {
    console.error('Error registering pharmacy:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
