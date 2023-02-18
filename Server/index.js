import  express  from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotel.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"

dotenv.config()
const app= express()


app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.get("/", (req,res)=>{
    res.send("server")
})

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "somathing went wrong!"
})

const PORT = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.set('strictQuery', true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connet");
        app.listen(PORT,()=>{
            console.log("server start");
        })
    }
})
