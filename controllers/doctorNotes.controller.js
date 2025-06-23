import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const createDoctorNotes = async (req, res, next) => {
  try {
    const { userId, note } = req.body;

   
    const doctor_Notes = await prisma.doctor_Notes.create({
      data: {
        userId: Number(userId),
        note: note
      },
    });

    res.json({ message: `create doctor notes successfully` });
  } catch (error) {
    next(error);
  }
};



export const getDoctorNotes = async (req, res, next) => {
  try {
    

    const doctor_Notes = await prisma.doctor_Notes.findMany({
      
     
    })

     res.json({ result: doctor_Notes })
  } catch (error) {
    next(error)
  }
}


export const getDoctorNotesById = async (req, res, next) => {
  try {
    const { userId } = req.params;
   
    const doctor_Notes = await prisma.doctor_Notes.findUnique({
      where: {
        userId: Number(userId),
      },
    });

    res.json({ result: doctor_Notes });
  } catch (error) {
    next(error);
  }
};