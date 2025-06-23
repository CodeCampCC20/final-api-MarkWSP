import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const getDoctor = async (req, res, next) => {
  try {
    

    const doctor = await prisma.doctor.findFirst({
      
      omit:{
        password: true
      }
    })

     res.json({ id: doctor.id, username: doctor.username, specialization: doctor.specialization,  message: "get me successful" })
  } catch (error) {
    next(error)
  }
}

export const patchDoctor = async (req, res, next) => {
 
try {
 
   const {username, password, specialization} = req.body

  const doctor = await prisma.doctor.update({
    where: {
      username: username,
    },
    data: {
      username: username,
      password: password,
      specialization: specialization
    }
  })

res.json({ id: doctor.id, username: doctor.username, specialization: doctor.specialization, message: `Updated ${doctor.username}` });

} catch (error) {
  next(error)
}
  
}