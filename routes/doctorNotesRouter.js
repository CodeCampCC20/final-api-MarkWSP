import express from 'express'
import { createDoctorNotes, deleteDoctorNoteById, getDoctorNotes, getDoctorNotesById, updateDoctorNoteById, getDoctorNotesByReceived } from '../controllers/doctorNotes.controller.js';
import { authCheck } from '../middlewares/auth.middleware.js';


const router = express.Router()


router.post("/", authCheck, createDoctorNotes)
router.get("/my-notes", authCheck, getDoctorNotes)
router.get("/user/:userId", authCheck, getDoctorNotesById)

router.get("/received", authCheck, getDoctorNotesByReceived)
router.patch("/:id", authCheck, updateDoctorNoteById)
router.delete("/:id", authCheck, deleteDoctorNoteById)


export default router;