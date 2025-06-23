import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const createDoctorNotes = async (req, res, next) => {
  try {
    const { userId, note } = req.body;
const doctorId = req.user.id;
   
    const doctor_Notes = await prisma.doctor_Notes.create({
      data: {
        userId: Number(userId),
        doctorId: Number(doctorId),
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
   
    const doctor_Notes = await prisma.doctor_Notes.findMany({
      where: {
        userId: Number(userId),
      },
    });

    res.json({ result: doctor_Notes });
  } catch (error) {
    next(error);
  }
};

export const getDoctorNotesByReceived = async (req, res, next) => {
  try {
   
   const { doctorId } = req.user;
    const doctor_Notes = await prisma.doctor_Notes.findMany({
    where: {
        doctorId: Number(doctorId),
      },
    });

    res.json({ result: doctor_Notes });
  } catch (error) {
    next(error);
  }
};


export const updateDoctorNoteById = async (req, res, next) => {
 
try {
    const {id} = req.params
   const {note} = req.body
 if (!note) {
      return next(createError(400, "Note is missing"));
    }
  const doctor_Notes = await prisma.doctor_Notes.update({
    where: {
      id: Number(id),
    },
    data: {
      note: note
    }
  })

res.json({result: doctor_Notes });

} catch (error) {
  next(error)
}
  
}


export const deleteDoctorNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const doctor_Notes = await prisma.doctor_Notes.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: `ID ${id} has been deleted` });
  } catch (error) {
    next(error);
  }
};
