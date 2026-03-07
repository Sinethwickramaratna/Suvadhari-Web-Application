# Suvadhari Web Application

A comprehensive full-stack healthcare web application built with modern web technologies. Suvadhari connects patients, doctors, pharmacies, and administrators in an integrated healthcare platform.

## Features

✅ **Multi-Role User System**
- Patient registration and profile management
- Doctor profiles and credentials
- Pharmacy management
- Admin dashboard and controls

✅ **Authentication & Security**
- User registration with email verification
- Secure login system
- Password reset functionality
- Rate-limited authentication endpoints
- Address encryption with bcrypt

✅ **User Pages**
- Home page with features overview
- About Us information
- Contact Us form
- How It Works guide
- User authentication pages (Login, Registration, Password Reset)
- Email verification flow

✅ **Docker Support**
- Containerized frontend and backend
- Docker Compose for easy deployment
- Development and production ready

## Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool and dev server
- **React Router DOM** 7.13.1 - Client-side routing
- **Tailwind CSS** 4.2.1 - Utility-first CSS framework
- **ESLint** - Code quality and style enforcement

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 5.2.1 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** 9.2.3 - MongoDB object modeling
- **Bcrypt** 6.0.0 - Password hashing
- **Nodemailer** 8.0.1 - Email transmission
- **Express Rate Limit** 8.3.0 - API rate limiting
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### DevTools
- **Nodemon** - Auto-restart server during development
- **Tailwind CSS Forms Plugin** - Enhanced form styling
- **PostCSS** - CSS transformations

## Project Structure

```
.
├── Client/                          # React frontend application
│   ├── src/
│   │   ├── components/             # Reusable components
│   │   │   ├── DatePicker.jsx
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Pages/
│   │   │   └── Public/             # Public pages
│   │   │       ├── Home Page.jsx
│   │   │       ├── AboutUs.jsx
│   │   │       ├── ContactUs.jsx
│   │   │       ├── Features.jsx
│   │   │       ├── HowItWorks.jsx
│   │   │       ├── Login.jsx
│   │   │       ├── Registration.jsx
│   │   │       ├── ForgotPassword.jsx
│   │   │       ├── ResetPassword.jsx
│   │   │       ├── VerifyEmail.jsx
│   │   │       └── Success pages
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── assets/                 # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
│
├── Server/                          # Express backend application
│   ├── config/
│   │   └── db.js                   # MongoDB configuration
│   ├── controllers/                # Business logic handlers
│   │   ├── userControllers.js
│   │   ├── patientController.js
│   │   ├── doctorController.js
│   │   ├── pharmacyController.js
│   │   └── adminController.js
│   ├── models/                     # MongoDB schemas
│   │   ├── userModel.js
│   │   ├── patientModel.js
│   │   ├── doctorModel.js
│   │   ├── pharmacyModel.js
│   │   ├── adminModel.js
│   │   ├── PendingRegistration.js
│   │   └── VerificationCode.js
│   ├── routes/                     # API endpoints
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── patientRoutes.js
│   │   ├── doctorRoutes.js
│   │   ├── pharmacyRoutes.js
│   │   └── adminRoutes.js
│   ├── utils/
│   │   └── sendEmail.js            # Email utility
│   ├── server.js                   # Express app entry point
│   ├── package.json
│   ├── .env                        # Environment variables
│   └── Dockerfile
│
├── docker-compose.yml              # Docker Compose configuration
└── README.md                        # This file
```

## Prerequisites

Before running the application, ensure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Docker** and **Docker Compose** (for containerized deployment)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "Suvadhari Web Application/Web"
```

### 2. Install Dependencies

#### Backend
```bash
cd Server
npm install
```

#### Frontend
```bash
cd ../Client
npm install
```

### 3. Environment Configuration

#### Backend Configuration
Create a `.env` file in the `Server/` directory:

```env
BACKEND_PORT=5000
MONGODB_URI=mongodb://localhost:27017/suvadhari
NODE_ENV=development

# Email Configuration (for password reset and verification)
EMAIL_HOST=your-email-host
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-email-password

# Database Configuration
DB_CONNECTION=mongodb

# JWT Secrets (if using JWT authentication)
JWT_SECRET=your-jwt-secret
JWT_EXPIRY=7d
```

#### Frontend Configuration
Create a `.env` file in the `Client/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

### Option 1: Using Docker Compose (Recommended)

```bash
# From the project root directory
docker-compose up --build
```

This will start:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Option 2: Local Development

#### Terminal 1 - Backend
```bash
cd Server
npm run dev
```
Server runs on: http://localhost:5000

#### Terminal 2 - Frontend
```bash
cd Client
npm run dev
```
Frontend runs on: http://localhost:3000

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - User login
- `POST /verify-email` - Verify email address
- `POST /forgot-password` - Request password reset
- `POST /reset-password` - Reset password with token

### User Routes (`/api/user`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `GET /users` - Get all users (admin only)

### Patient Routes (`/api/patient`)
- `POST /register` - Register as patient
- `GET /profile` - Get patient profile
- `PUT /profile` - Update patient profile
- `GET /appointments` - Get patient appointments

### Doctor Routes (`/api/doctor`)
- `POST /register` - Register as doctor
- `GET /profile` - Get doctor profile
- `PUT /profile` - Update doctor profile
- `GET /appointments` - Get doctor appointments

### Pharmacy Routes (`/api/pharmacy`)
- `POST /register` - Register as pharmacy
- `GET /profile` - Get pharmacy profile
- `PUT /profile` - Update pharmacy profile

### Admin Routes (`/api/admin`)
- `GET /dashboard` - Get admin dashboard data
- `GET /users` - Manage users
- `GET /doctors` - Manage doctors
- `GET /pharmacies` - Manage pharmacies

**Note:** All authentication routes are rate-limited to 5 requests per minute per IP address.

## Development Guide

### Running Tests
```bash
# Backend tests
cd Server
npm test

# Frontend tests
cd ../Client
npm run test
```

### Building for Production

#### Frontend Build
```bash
cd Client
npm run build
```
Output files are in `Client/dist/`

#### Backend Production
```bash
cd Server
NODE_ENV=production npm start
```

### Code Quality

#### Lint Frontend
```bash
cd Client
npm run lint
```

## Features in Detail

### User Registration Flow
1. User selects role (Patient, Doctor, Pharmacy, etc.)
2. Completes registration form
3. Receives verification email
4. Verifies email with code
5. Activation after admin approval (if needed)

### Email Verification
- Automated verification code generation
- Email transmission via Nodemailer
- Expiring verification codes
- Resend verification option

### Security Features
- Password hashing with bcrypt
- Rate limiting on authentication endpoints
- CORS protection
- Environment-based configuration
- Secure session management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Port Already in Use
If ports 3000 or 5000 are already in use:
- Change `BACKEND_PORT` in `Server/.env`
- Change Vite port in `Client/vite.config.js`

### Database Connection Error
- Ensure MongoDB is running
- Verify `MONGODB_URI` in `Server/.env` is correct
- Check network connectivity to MongoDB

### Email Not Sending
- Verify email credentials in `Server/.env`
- Check email service provider security settings
- Ensure "Less secure app access" is enabled (if using Gmail)

### Docker Build Fails
```bash
# Clean and rebuild
docker-compose down
docker-compose build --no-cache
docker-compose up
```

## License

This project is licensed under the ISC License - see your LICENSE file for details.

## Support

For issues, questions, or suggestions, please:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact the development team

---

**Last Updated:** March 7, 2026
