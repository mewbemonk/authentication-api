import express from 'express';
import create_rate_limit from '../middleware/rate-limitter/rate-limitter.middleware.js';
import sendOTP from '../middleware/nodemailer.middleware/sendmail.middleware.js';
import login from '../controllers/auth.login.js';
import register from '../controllers/auth.register.js';
import validation from '../middleware/zod/zod.auth.middleware.js';
import register_schema from '../middleware/zod/zod.validation.js';










const router = express.Router();

const login_limit = create_rate_limit(10,5,"Too many login attempt");
const otp_limit = create_rate_limit(5,3,"Too many OTP request");
const register_limit = create_rate_limit(10,5,"To many registration attempt");


router.patch('/send-otp',otp_limit , sendOTP);
router.post('/login', login_limit, login);
router.post('/register', register_limit, validation(register_schema), register)

export default router;