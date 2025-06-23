import express from 'express'
import { createDoctorNotes, deleteDoctorNoteById, getDoctorNotes, getDoctorNotesById, updateDoctorNoteById, getDoctorNotesByReceived } from '../controllers/doctorNotes.controller.js';


const router = express.Router()


router.post("/", createDoctorNotes)
router.get("/my-notes", getDoctorNotes)
router.get("/user/:userId", getDoctorNotesById)

router.get("/received", getDoctorNotesByReceived)
router.patch("/:id", updateDoctorNoteById)
router.delete("/:id", deleteDoctorNoteById)


export default router;