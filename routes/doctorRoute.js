import express from 'express'
import { getDoctor, patchDoctor } from '../controllers/doctor.controller.js'
import { authCheck } from '../middlewares/auth.middleware.js'

const router = express.Router()


router.get("/me", getDoctor)
router.patch("/me", authCheck, patchDoctor)







export default router;