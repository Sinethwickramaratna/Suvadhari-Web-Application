const mongoose = require('mongoose');

const memberSchema = {
  family_member_pin: { type: String, required: true },
  relationship: { type: String, required: true },
}

const familyMemberSchema = new mongoose.Schema({
  patient_pin: { type: String, required: true },
  family_members: { type: 
    [memberSchema], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const FamilyMember = mongoose.model('FamilyMember', familyMemberSchema);

module.exports = FamilyMember;
