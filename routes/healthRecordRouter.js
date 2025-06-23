import express from 'express'
import { createHealthRecord, deleteHealthRecordById, getHealthRecord, getHealthRecordById, updateHealthRecordById } from '../controllers/healthRecord.controller.js';
import { authCheck } from '../middlewares/auth.middleware.js';



const router = express.Router()

router.post("/", authCheck, createHealthRecord)
router.get("/", authCheck, getHealthRecord)
router.get("/:id", authCheck, getHealthRecordById)
router.patch("/:id", authCheck, updateHealthRecordById)
router.delete("/:id", authCheck, deleteHealthRecordById)


export default router;