import express from 'express'
import { getMe, patchMe } from '../controllers/user.controller.js';
import { authCheck } from '../middlewares/auth.middleware.js';





const router = express.Router();

router.get("/me", getMe )
router.patch("/me", authCheck, patchMe )




export default router;