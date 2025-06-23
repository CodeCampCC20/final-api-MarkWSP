import express from "express";
import cors from "cors";
import morgan from "morgan";
import {error} from './utils/error.js'
import {notFound} from './utils/notfound.js'
//routing import
import authRouter from "./routes/auth.js";
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import healthRecordRouter from "./routes/healthRecordRouter.js"
import doctorNotesRouter from "./routes/doctorNotesRouter.js"

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routing
app.use("/auth", authRouter);

app.use("/users", userRouter)

app.use("/doctors", doctorRouter)


app.use("/health-records", healthRecordRouter)


app.use("/doctor-notes", doctorNotesRouter)







//Handling Errors
app.use(error)  

//404 not found
app.use(notFound)

//Server Start
const PORT = 8000;
app.listen(PORT, () => console.log(`Server Running at Port ${PORT}`));
