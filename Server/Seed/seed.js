'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const Hospital = require('../models/hospitalModel');

// ─── Seed Data ────────────────────────────────────────────────────────────────

const hospitalSeedData = [
  {"name": "National Hospital of Sri Lanka", "address": "Regent Street, Colombo 10", "province": "Western", "district": "Colombo", "phoneNumber": "+94 11 2691111", "email": "nhsl@hospital.lk"},
  {"name":"Colombo South Teaching Hospital","address":"Kalubowila","province":"Western","district":"Colombo","phoneNumber":"+94 11 2761212","email":"kalubowila@hospital.lk"},
  {"name":"Colombo North Teaching Hospital","address":"Ragama","province":"Western","district":"Gampaha","phoneNumber":"+94 11 2959261","email":"ragama@hospital.lk"},
  {"name":"District General Hospital Negombo","address":"Negombo","province":"Western","district":"Gampaha","phoneNumber":"+94 31 2222261","email":"negombo@hospital.lk"},
  {"name":"Base Hospital Panadura","address":"Panadura","province":"Western","district":"Kalutara","phoneNumber":"+94 38 2232261","email":"panadura@hospital.lk"},
  {"name":"District General Hospital Kalutara","address":"Nagoda, Kalutara","province":"Western","district":"Kalutara","phoneNumber":"+94 34 2222261","email":"kalutara@hospital.lk"},
  {"name":"Teaching Hospital Kandy","address":"William Gopallawa Mawatha, Kandy","province":"Central","district":"Kandy","phoneNumber":"+94 81 2233337","email":"kandy@hospital.lk"},
  {"name":"District General Hospital Nuwara Eliya","address":"Nuwara Eliya","province":"Central","district":"Nuwara Eliya","phoneNumber":"+94 52 2222261","email":"nuwaraeliya@hospital.lk"},
  {"name":"Teaching Hospital Peradeniya","address":"Peradeniya","province":"Central","district":"Kandy","phoneNumber":"+94 81 2388000","email":"peradeniya@hospital.lk"},
  {"name":"Base Hospital Dambulla","address":"Dambulla","province":"Central","district":"Matale","phoneNumber":"+94 66 2282261","email":"dambulla@hospital.lk"},
  {"name":"Teaching Hospital Karapitiya","address":"Karapitiya, Galle","province":"Southern","district":"Galle","phoneNumber":"+94 91 2232561","email":"karapitiya@hospital.lk"},
  {"name":"District General Hospital Matara","address":"Matara","province":"Southern","district":"Matara","phoneNumber":"+94 41 2222261","email":"matara@hospital.lk"},
  {"name":"Base Hospital Tangalle","address":"Tangalle","province":"Southern","district":"Hambantota","phoneNumber":"+94 47 2242261","email":"tangalle@hospital.lk"},
  {"name":"Hambantota General Hospital","address":"Hambantota","province":"Southern","district":"Hambantota","phoneNumber":"+94 47 2222261","email":"hambantota@hospital.lk"},
  {"name":"District General Hospital Hambantota","address":"Hambantota Town","province":"Southern","district":"Hambantota","phoneNumber":"+94 47 2252261","email":"dghambantota@hospital.lk"},
  {"name":"Teaching Hospital Jaffna","address":"Hospital Road, Jaffna","province":"Northern","district":"Jaffna","phoneNumber":"+94 21 2222261","email":"jaffna@hospital.lk"},
  {"name":"District General Hospital Kilinochchi","address":"Kilinochchi","province":"Northern","district":"Kilinochchi","phoneNumber":"+94 21 2282261","email":"kilinochchi@hospital.lk"},
  {"name":"Base Hospital Mannar","address":"Mannar","province":"Northern","district":"Mannar","phoneNumber":"+94 23 2222261","email":"mannar@hospital.lk"},
  {"name":"District General Hospital Mullaitivu","address":"Mullaitivu","province":"Northern","district":"Mullaitivu","phoneNumber":"+94 21 2292261","email":"mullaitivu@hospital.lk"},
  {"name":"Base Hospital Point Pedro","address":"Point Pedro","province":"Northern","district":"Jaffna","phoneNumber":"+94 21 2262261","email":"pointpedro@hospital.lk"},
  {"name":"Teaching Hospital Batticaloa","address":"Bar Road, Batticaloa","province":"Eastern","district":"Batticaloa","phoneNumber":"+94 65 2222261","email":"batticaloa@hospital.lk"},
  {"name":"District General Hospital Ampara","address":"Ampara","province":"Eastern","district":"Ampara","phoneNumber":"+94 63 2222261","email":"ampara@hospital.lk"},
  {"name":"Base Hospital Kalmunai","address":"Kalmunai","province":"Eastern","district":"Ampara","phoneNumber":"+94 67 2222261","email":"kalmunai@hospital.lk"},
  {"name":"District General Hospital Trincomalee","address":"Trincomalee","province":"Eastern","district":"Trincomalee","phoneNumber":"+94 26 2222261","email":"trincomalee@hospital.lk"},
  {"name":"Kinniya Base Hospital","address":"Kinniya","province":"Eastern","district":"Trincomalee","phoneNumber":"+94 26 2232261","email":"kinniya@hospital.lk"},
  {"name":"Teaching Hospital Anuradhapura","address":"Stage II, Anuradhapura","province":"North Central","district":"Anuradhapura","phoneNumber":"+94 25 2222261","email":"anuradhapura@hospital.lk"},
  {"name":"District General Hospital Polonnaruwa","address":"Polonnaruwa","province":"North Central","district":"Polonnaruwa","phoneNumber":"+94 27 2222261","email":"polonnaruwa@hospital.lk"},
  {"name":"Base Hospital Medirigiriya","address":"Medirigiriya","province":"North Central","district":"Polonnaruwa","phoneNumber":"+94 27 2242261","email":"medirigiriya@hospital.lk"},
  {"name":"Base Hospital Thambuttegama","address":"Thambuttegama","province":"North Central","district":"Anuradhapura","phoneNumber":"+94 25 2272261","email":"thambuttegama@hospital.lk"},
  {"name":"Base Hospital Kekirawa","address":"Kekirawa","province":"North Central","district":"Anuradhapura","phoneNumber":"+94 25 2262261","email":"kekirawa@hospital.lk"},
  {"name":"Teaching Hospital Kurunegala","address":"Colombo Road, Kurunegala","province":"North Western","district":"Kurunegala","phoneNumber":"+94 37 2222261","email":"kurunegala@hospital.lk"},
  {"name":"District General Hospital Chilaw","address":"Chilaw","province":"North Western","district":"Puttalam","phoneNumber":"+94 32 2222261","email":"chilaw@hospital.lk"},
  {"name":"Base Hospital Kuliyapitiya","address":"Kuliyapitiya","province":"North Western","district":"Kurunegala","phoneNumber":"+94 37 2282261","email":"kuliyapitiya@hospital.lk"},
  {"name":"Puttalam Base Hospital","address":"Puttalam","province":"North Western","district":"Puttalam","phoneNumber":"+94 32 2262261","email":"puttalam@hospital.lk"},
  {"name":"Marawila Base Hospital","address":"Marawila","province":"North Western","district":"Puttalam","phoneNumber":"+94 32 2252261","email":"marawila@hospital.lk"},
  {"name":"Teaching Hospital Ratnapura","address":"Ratnapura","province":"Sabaragamuwa","district":"Ratnapura","phoneNumber":"+94 45 2222261","email":"ratnapura@hospital.lk"},
  {"name":"District General Hospital Kegalle","address":"Kegalle","province":"Sabaragamuwa","district":"Kegalle","phoneNumber":"+94 35 2222261","email":"kegalle@hospital.lk"},
  {"name":"Base Hospital Balangoda","address":"Balangoda","province":"Sabaragamuwa","district":"Ratnapura","phoneNumber":"+94 45 2282261","email":"balangoda@hospital.lk"},
  {"name":"Base Hospital Embilipitiya","address":"Embilipitiya","province":"Sabaragamuwa","district":"Ratnapura","phoneNumber":"+94 47 2232261","email":"embilipitiya@hospital.lk"},
  {"name":"Warakapola Base Hospital","address":"Warakapola","province":"Sabaragamuwa","district":"Kegalle","phoneNumber":"+94 35 2262261","email":"warakapola@hospital.lk"},
  {"name":"Teaching Hospital Badulla","address":"Badulla","province":"Uva","district":"Badulla","phoneNumber":"+94 55 2222261","email":"badulla@hospital.lk"},
  {"name":"District General Hospital Monaragala","address":"Monaragala","province":"Uva","district":"Monaragala","phoneNumber":"+94 55 2272261","email":"monaragala@hospital.lk"},
  {"name":"Base Hospital Bandarawela","address":"Bandarawela","province":"Uva","district":"Badulla","phoneNumber":"+94 57 2222261","email":"bandarawela@hospital.lk"},
  {"name":"Base Hospital Wellawaya","address":"Wellawaya","province":"Uva","district":"Monaragala","phoneNumber":"+94 55 2252261","email":"wellawaya@hospital.lk"},
  {"name":"Diyatalawa Army Hospital","address":"Diyatalawa","province":"Uva","district":"Badulla","phoneNumber":"+94 57 2232261","email":"diyatalawa@hospital.lk"},
  {"name":"Lady Ridgeway Hospital for Children","address":"Colombo 8","province":"Western","district":"Colombo","phoneNumber":"+94 11 2693711","email":"lrh@hospital.lk"},
  {"name":"Castle Street Hospital for Women","address":"Colombo 8","province":"Western","district":"Colombo","phoneNumber":"+94 11 2696239","email":"castle@hospital.lk"},
  {"name":"De Soysa Maternity Hospital","address":"Colombo 8","province":"Western","district":"Colombo","phoneNumber":"+94 11 2699773","email":"desoysa@hospital.lk"},
  {"name":"Sri Jayawardenepura General Hospital","address":"Thalapathpitiya, Nugegoda","province":"Western","district":"Colombo","phoneNumber":"+94 11 2778610","email":"sjgh@hospital.lk"},
  {"name":"Homagama Base Hospital","address":"Homagama","province":"Western","district":"Colombo","phoneNumber":"+94 11 2855200","email":"homagama@hospital.lk"},
  {"name":"Avissawella Base Hospital","address":"Avissawella","province":"Western","district":"Colombo","phoneNumber":"+94 36 2222261","email":"avissawella@hospital.lk"}
];

const hospitals = hospitalSeedData.map((hospital) => ({
  hospital_pin: hospital.hospital_pin || 'HOSP_' + nanoid(10),
  ...hospital,
}));

// ─── Seeder ───────────────────────────────────────────────────────────────────

const seedHospitals = async () => {
  let inserted = 0;
  let skipped = 0;

  for (const data of hospitals) {
    const exists = await Hospital.findOne({ name: data.name });
    if (exists) {
      console.log(`[SKIP]   ${data.name} already exists.`);
      skipped++;
    } else {
      await Hospital.create(data);
      console.log(`[ADDED]  ${data.name}`);
      inserted++;
    }
  }

  console.log(`\nDone — ${inserted} inserted, ${skipped} skipped.`);
};

// ─── Entry Point ──────────────────────────────────────────────────────────────

const run = async () => {
  try {
    if (!process.env.MONGO_URI_TEST) {
      throw new Error('MONGO_URI_TEST is not defined. Check your .env file.');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log('Connected.\n');

    await seedHospitals();
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB.');
  }
};

run();