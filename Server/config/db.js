const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("../utils/logger");
dotenv.config();


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    logger.info('Database', 'MongoDB Connected', { host: conn.connection.host });
  } catch (error) {
    logger.error('Database', 'MongoDB Connection Error', error);
    process.exit(1);
  }
};

module.exports = connectDB;