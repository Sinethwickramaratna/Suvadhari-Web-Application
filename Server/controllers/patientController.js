const Patient = require('../models/patientModel');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');

exports.registerPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      email,
      phoneNumber,
      gender,
      dateOfBirth,
      idNumber,
      address,
      medicalInfo,
      password,
      confirmPassword,
    } = req.body;

    console.log('Received patient registration data:', req.body);

    if (password !== confirmPassword) {
      console.log('Password and confirm password do not match');
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      console.log('Password does not meet complexity requirements');
      return res.status(400).json({ message: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character' });
    }
    const person_pin = "P_" + nanoid(10);

    const hashedIdNumber = await bcrypt.hash(idNumber, 10);
    const existingPatient = await Patient.findOne({ $or: [{ email }, { person_pin }, { idNumber: hashedIdNumber }] });
    if (existingPatient) {
      console.log('Patient with this email, person pin, or ID number already exists');
      return res.status(400).json({ message: 'Patient with this email, person pin, or ID number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newPatient = new Patient({
      person_pin,
      firstName,
      lastName,
      fullName,
      email,
      phoneNumber,
      gender,
      dateOfBirth,
      idNumber: hashedIdNumber,
      address,
      medicalInfo,
      password: hashedPassword,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
    console.log('Patient registered successfully');

  } catch (error) {
    console.error('Error registering patient:', error);
    res.status(500).json({ message: 'Server error' });
  }
};