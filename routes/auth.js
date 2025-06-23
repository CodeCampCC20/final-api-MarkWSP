import express from 'express'
//controller import
import { loginDoctor, loginUser, registerDoctor, registerUser } from '../controllers/auth.controller.js';
import { validate, registerSchema, loginSchema } from '../validations/validator.js';
const router = express.Router();

//ENDPOINT http://localhost:8000/auth/
router.post('/register/doctor', validate(registerSchema), registerDoctor )
router.post('/register/user', validate(registerSchema), registerUser)

router.post('/login/doctor', validate(loginSchema), loginDoctor)
router.post('/login/user', validate(loginSchema), loginUser)





export default router;