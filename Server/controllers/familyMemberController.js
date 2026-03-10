const FamilyMember = require('../models/familyMembersModel');
const Patient = require('../models/patientModel');
const logger = require('../utils/logger');

exports.searchPatients = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) return res.status(400).json({ message: "Search query is required" });

        const patients = await Patient.find({
            $and: [
                { person_pin: { $ne: req.user.profileId } }, // Exclude self
                {
                    $or: [
                        { firstName: { $regex: query, $options: 'i' } },
                        { lastName: { $regex: query, $options: 'i' } },
                        { fullName: { $regex: query, $options: 'i' } },
                        { person_pin: query }
                    ]
                }
            ]
        }).select('person_pin firstName lastName fullName');

        res.json(patients);
    } catch (error) {
        logger.error('FamilyMember', 'Search patients error', error);
        res.status(500).json({ message: "Error searching patients" });
    }
};

exports.addFamilyMember = async (req, res) => {
    try {
        const { family_member_pin, relationship } = req.body;
        const patient_pin = req.user.profileId;

        if (!family_member_pin || !relationship) {
            return res.status(400).json({ message: "Member PIN and relationship are required" });
        }

        let familyDoc = await FamilyMember.findOne({ patient_pin });

        if (!familyDoc) {
            familyDoc = new FamilyMember({
                patient_pin,
                family_members: []
            });
        }

        // Check if already added
        const exists = familyDoc.family_members.find(m => m.family_member_pin === family_member_pin);
        if (exists) {
            return res.status(400).json({ message: "Family member already added" });
        }

        familyDoc.family_members.push({ family_member_pin, relationship });
        familyDoc.updatedAt = Date.now();
        await familyDoc.save();

        logger.info('FamilyMember', 'Family member added', { patient_pin, family_member_pin });
        res.status(201).json({ message: "Family member added successfully" });
    } catch (error) {
        logger.error('FamilyMember', 'Add family member error', error);
        res.status(500).json({ message: "Error adding family member" });
    }
};

exports.getFamilyMembers = async (req, res) => {
    try {
        const patient_pin = req.user.profileId;
        const familyDoc = await FamilyMember.findOne({ patient_pin });

        if (!familyDoc) return res.json([]);

        // Populate member details
        const memberDetails = await Promise.all(familyDoc.family_members.map(async (member) => {
            const patient = await Patient.findOne({ person_pin: member.family_member_pin }).select('firstName lastName fullName');
            return {
                ...member.toObject(),
                details: patient
            };
        }));

        res.json(memberDetails);
    } catch (error) {
        logger.error('FamilyMember', 'Get family members error', error);
        res.status(500).json({ message: "Error retrieving family members" });
    }
};

exports.removeFamilyMember = async (req, res) => {
    try {
        const { family_member_pin } = req.body;
        const patient_pin = req.user.profileId;

        const familyDoc = await FamilyMember.findOne({ patient_pin });
        if (!familyDoc) return res.status(404).json({ message: "No family members found" });

        familyDoc.family_members = familyDoc.family_members.filter(m => m.family_member_pin !== family_member_pin);
        familyDoc.updatedAt = Date.now();
        await familyDoc.save();

        logger.info('FamilyMember', 'Family member removed', { patient_pin, family_member_pin });
        res.json({ message: "Family member removed" });
    } catch (error) {
        logger.error('FamilyMember', 'Remove family member error', error);
        res.status(500).json({ message: "Error removing family member" });
    }
};
