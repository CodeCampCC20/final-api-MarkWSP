import express from 'express'
import { createHealthRecord, deleteHealthRecordById, getHealthRecord, getHealthRecordById, updateHealthRecordById } from '../controllers/healthRecord.controller.js';



const router = express.Router()

router.post("/", createHealthRecord)
router.get("/", getHealthRecord)
router.get("/:id", getHealthRecordById)
router.patch("/:id", updateHealthRecordById)
router.delete("/:id", deleteHealthRecordById)


export default router;