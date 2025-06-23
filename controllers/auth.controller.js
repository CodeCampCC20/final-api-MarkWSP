import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const registerDoctor = async (req, res, next) => {
  try {
    const { username, password, confirmpassword, specialization } = req.body;

    const doctor = await prisma.doctor.findFirst({
      where: {
        username: username,
      },
    });
    if (doctor) {
      createError(400, "Username already existed");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    const result = await prisma.doctor.create({
      data: {
        username: username,
        password: hashPassword,
        specialization: specialization,
      },
    });

    res.json({ message: `Register Doctor ${result.username} Successfully` });
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req,res, next) => {
   try {
    const { username, password, confirmpassword } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      createError(400, "Username already existed");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    const result = await prisma.user.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    res.json({ message: `Register User ${result.username} Successfully` });
  } catch (error) {
    next(error);
  }
}

export const loginDoctor = async (req, res, next) => {
  try {
    const {username, password} = req.body
    const doctor = await prisma.doctor.findFirst({
      where: {
        username: username
      }
    })
    if(!doctor) {
      createError(400, "Email or password is invalid")
    }

    const payload = {
      id: doctor.id,
      role: doctor.role,
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1d'
    })

      res.json({
     id: doctor.id,
     username: username,
     specialization: doctor.specialization,
     token:token
    })
 res.json({ message: "Login Successful" });
  } catch (error) {
    next(error)
  }
}


export const loginUser = async (req, res, next) => {
  try {
    const {username, password} = req.body
    const user = await prisma.user.findFirst({
      where: {
        username: username
      }
    })
    if(!user) {
      createError(400, "Email or password is invalid")
    }

    const payload = {
      id: user.id,
      role: user.role,
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1d'
    })

      res.json({
     id: user.id,
     username: username,
     token:token
    })
 res.json({ message: "Login Successful" });
  } catch (error) {
    next(error)
  }
}