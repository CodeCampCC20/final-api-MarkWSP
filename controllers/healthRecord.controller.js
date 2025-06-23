import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const createHealthRecord = async (req, res, next) => {
  try {
    const { type, value } = req.body;
    const userId = req.user.id;
   console.log("gaga", userId)
    const result = await prisma.health_Records.create({
      data: {
        userId: Number(userId),
        type: type,
        value: value
      },
    });

    res.json({ message: `create health record successfully` });
  } catch (error) {
    next(error);
  }
};


export const getHealthRecord = async (req, res, next) => {
  try {
    

    const health_Records = await prisma.health_Records.findMany({
      
     
    })

     res.json({ result: health_Records })
  } catch (error) {
    next(error)
  }
}


export const getHealthRecordById = async (req, res, next) => {
  try {
    const { id } = req.params;
   
    const health_Records = await prisma.health_Records.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.json({ result: health_Records });
  } catch (error) {
    next(error);
  }
};


export const updateHealthRecordById = async (req, res, next) => {
 
try {
    const {id} = req.params
   const {type, value} = req.body

  const health_Records = await prisma.health_Records.update({
    where: {
      id: Number(id),
    },
    data: {
      type: type,
      value: value
    }
  })

res.json({result: health_Records });

} catch (error) {
  next(error)
}
  
}


export const deleteHealthRecordById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const health_Records = await prisma.health_Records.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: `ID ${id} ${health_Records.type} has been deleted` });
  } catch (error) {
    next(error);
  }
};
