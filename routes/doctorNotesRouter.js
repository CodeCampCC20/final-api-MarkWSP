import express from 'express'
import { createDoctorNotes, getDoctorNotes, getDoctorNotesById } from '../controllers/doctorNotes.controller.js';


const router = express.Router()


router.post("/", createDoctorNotes)
router.get("/", getDoctorNotes)
router.get("/", getDoctorNotesById)


export default router;