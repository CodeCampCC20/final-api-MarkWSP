import { object, ref, string } from "yup";


export const registerSchema = object({
  username: string().min(4, "Username ต้องมากกว่า 4 ตัวอักษร").required("กรุณากรอก Username"),
  password: string().min(4, "Password ต้องมากกว่า 4 ตัวอักษร"),
  confirmPassword: string().oneOf(
    [ref("password"), null],"Confirm Password ไม่ตรงกัน"),
});

export const loginSchema = object({
  username: string().required("กรุณากรอก Email"),
  password: string().min(4, "Password ต้องมากกว่า 6 ตัวอักษร"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
     await schema.validate(req.body, {abortEarly: false})
    next();
  } catch (error) {
    const errMsg = error.errors.map ((item) => item); 
    const errTxt = errMsg.join(",")
    console.log(errTxt)

    const mergeErr = new Error(errTxt)
    next(mergeErr)
  }
}