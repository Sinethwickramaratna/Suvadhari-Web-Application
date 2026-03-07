const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');

exports.registerAdmin = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      email,
      phoneNumber,
      Gender,
      dateOfBirth,
      address,
      idNumber,
      hospitalName,
      RoleInHospital,
      password,
      confirmPassword
    } = req.body;

    console.log('Received admin registration data:', req.body);

    if (password !== confirmPassword) {
      console.log('Password and confirm password do not match');
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log('Password does not meet complexity requirements');
      return res.status(400).json({ message: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character' });
    }

    const person_pin = "A_" + nanoid(10);
    const hashedIdNumber = await bcrypt.hash(idNumber, 10);
    const existingAdmin = await Admin.findOne({ $or: [{ email }, { person_pin }, { idNumber: hashedIdNumber }] });
    if (existingAdmin) {
      console.log('Admin with this email, person pin, or ID number already exists');
      return res.status(400).json({ message: 'Admin with this email, person pin, or ID number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      person_pin,
      firstName,
      lastName,
      fullName,
      email,
      phoneNumber,
      Gender,
      dateOfBirth,
      address,
      idNumber: hashedIdNumber,
      hospitalName,
      RoleInHospital,
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log('Admin registered successfully:', newAdmin);
    res.status(201).json({ message: 'Admin registered successfully', admin: newAdmin });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
