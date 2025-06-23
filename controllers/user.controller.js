import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const getMe = async (req, res, next) => {
  try {
    

    const user = await prisma.user.findFirst({
      
      omit:{
        password: true
      }
    })

     res.json({ id: user.id, username: user.username, message: "get me successful" })
  } catch (error) {
    next(error)
  }
}

export const patchMe = async (req, res, next) => {
 
try {
 
   const {username, password} = req.body

  const user = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      username: username,
      password: password
    }
  })

res.json({ id: user.id, username: user.username, message: `Updated ${user.username}` });

} catch (error) {
  next(error)
}
  
}