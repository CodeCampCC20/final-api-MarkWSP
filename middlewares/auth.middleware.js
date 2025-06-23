import { createError } from "../utils/createError.js";
import jwt, { decode } from "jsonwebtoken"

export const authCheck = (req, res, next) => {

  try {
 
    const header = req.headers.authorization;
   
    if(!header) {
      createError(401, "Authentication required")
    }

    const token = header.split(' ')[1]
    

    jwt.verify(token, process.env.SECRET_KEY, (error, decode)=>{
      if(error){
        createError(401, "You don't have permission to perform this action")
      }
      req.user = decode
      
    next()

    })
  } catch (error) {
    next(error)
  }
};
