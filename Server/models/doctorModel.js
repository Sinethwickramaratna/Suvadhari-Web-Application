const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  person_pin: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  Gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dateOfBirth: { type: Date, required: true },
  idNumber: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  province: { type: String, required: true },
  district: { type: String, required: true },
  medicalLicenseNumber: { type: String, required: true, unique: true },
  specialization: { type: String, required: true },
  workingHospital: { type: String, required: true },
  currentPosition: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);