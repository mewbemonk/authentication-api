🔐 Authentication API

A secure and modular Authentication API built with Node.js, Express, and MongoDB.

This project implements JWT-based authentication, password hashing, OTP email verification, input validation, rate limiting, and API caching following production-level backend best practices.

🚀 Features

User Registration

User Login

JWT Authentication (1-hour expiry)

Protected Routes Middleware

Password Hashing (bcrypt)

Zod Schema Validation

OTP Email Verification (5-minute expiry)

Rate Limiting (Login / Register / OTP)

API Caching

Centralized Error Handling

Modular Backend Architecture

Docker Support

🛠 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

jsonwebtoken (JWT)

bcryptjs

Zod

Nodemailer

express-rate-limit

apicache

Docker

📂 Project Structure
Backend/
│
├── src/
│   ├── controllers/
│   │   ├── auth.login.js
│   │   ├── auth.register.js
│   │   └── index.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── index.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── middleware/
│   │   ├── auth/
│   │   │   ├── jwt.middleware.js
│   │   │   └── protected.route.middleware.js
│   │   │
│   │   ├── validation/
│   │   │   ├── zod.auth.middleware.js
│   │   │   └── zod.validation.js
│   │   │
│   │   ├── rate-limiter/
│   │   │   └── rate-limiter.middleware.js
│   │   │
│   │   ├── mail/
│   │   │   ├── sendmail.js
│   │   │   └── sendmail.middleware.js
│   │   │
│   │   ├── cache/
│   │   │   └── cache-memory.middleware.js
│   │   │
│   │   └── error.middleware.js
│   │
│   ├── db/
│   │   └── index.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   └── helpers.js
│   │
│   └── server.js
│
├── tests/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── models/
│
├── config/
│   ├── env.js
│   └── cors.js
│
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
⚙️ Installation
Clone the Repository
git clone https://github.com/mewbemonk/authentication-api.git
cd Backend
Install Dependencies
npm install
Setup Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
Run the Server
node server.js

Server runs at:

http://localhost:5000
🔑 API Endpoints
Register User

POST /api/register

{
  "name": "User",
  "email": "user@email.com",
  "password": "Password@123"
}
Login User

POST /api/login

{
  "email": "user@email.com",
  "password": "Password@123"
}

Response:

{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
Send OTP

PATCH /api/send-otp

{
  "email": "user@email.com"
}
Protected Routes

Add JWT in header:

Authorization: Bearer YOUR_JWT_TOKEN
🔐 Security Implementation

Password hashing using bcrypt

JWT token expiration (1 hour)

OTP expiration (5 minutes)

Rate limiting for brute-force protection

Zod validation for request safety

Environment variables for sensitive data

Middleware-based authentication flow

Centralized error handling

🧪 Testing

Run tests:

npm test
📈 Future Improvements

OTP Verification Endpoint

Refresh Token System

Forgot Password Flow

Role-Based Authorization (RBAC)

Swagger API Documentation

Redis-based OTP Storage

Logging & Monitoring Integration

🐳 Docker Support

Run with Docker:

docker-compose up --build
👨‍💻 Author

Rishabh Pandey
MERN Stack Backend Developer