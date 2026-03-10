const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const logger = require('./utils/logger');

dotenv.config();

logger.info('Server', 'Application starting', { nodeEnv: process.env.NODE_ENV });
connectDB();

const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Rate Limiter for Authentication (Relaxed for dev)
const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Increased for dev/testing
  message: { message: "Too many requests from this IP, please try again after a minute." }
});

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authLimiter, authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

const patientRoutes = require('./routes/patientRoutes');
app.use('/api/patient', patientRoutes);

const doctorRoutes = require('./routes/doctorRoutes');
app.use('/api/doctor', doctorRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

const pharmacyRoutes = require('./routes/pharmacyRoutes');
app.use('/api/pharmacy', pharmacyRoutes);

const hospitalRoutes = require('./routes/hospitalRoute');
app.use('/api/hospital', hospitalRoutes);

const PORT = process.env.BACKEND_PORT;

logger.info('Server', 'Starting Express server', { port: PORT });

const server = app.listen(PORT, () => {
  logger.info('Server', 'Server is running', { port: PORT });
});

server.on('error', (err) => {
  logger.error('Server', 'Server error', err);
});