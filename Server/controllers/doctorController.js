const bcrypt = require('bcrypt');
const Doctor = require('../models/doctorModel');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');

exports.registerDoctor = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      email,
      phoneNumber,
      Gender,
      dateOfBirth,
      idNumber,
      address,
      specialization,
      password,
      confirmPassword,
    } = req.body;

    console.log('Received doctor registration data:', req.body);

    if (password !== confirmPassword) {
      console.log('Password and confirm password do not match');
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log('Password does not meet complexity requirements');
      return res.status(400).json({ message: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character' });
    }

    const person_pin = "D_" + nanoid(10);
    const hashedIdNumber = await bcrypt.hash(idNumber, 10);
    const existingDoctor = await Doctor.findOne({ $or: [{ email }, { person_pin }, { idNumber: hashedIdNumber }] });
    if (existingDoctor) {
      console.log('Doctor with this email, person pin, or ID number already exists');
      return res.status(400).json({ message: 'Doctor with this email, person pin, or ID number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newDoctor = new Doctor({
      person_pin,
      firstName,
      lastName,
      fullName,
      email,
      phoneNumber,
      Gender,
      dateOfBirth,
      idNumber: hashedIdNumber,
      address,
      specialization,
      password: hashedPassword,
    });
    await newDoctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    console.error('Error registering doctor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}