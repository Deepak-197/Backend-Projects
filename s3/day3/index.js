const express = require("express")
const {connection} = require("./db")
require('dotenv').config()               //.env means environment variables
const {userRouter} = require("./routes/User.routes")
const {studentRouter} = require("./routes/Student.routes")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome User Dashboard!")
})

// app.get("/",async (req, res) => {
//     try{
//         const users = await UserModel.find()
//         res.send(users)
//     }catch(err){
//         res.send({"msg":"Cannot get user.", "error":err.message})
//     }
//     res.send("WELCOME")

// })

app.use("/users", userRouter)
app.use("/students", studentRouter)



app.listen(process.env.port, async() => {
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot Connect to the DB")
        console.log(err)
    }
    
    console.log(`Server is running at port ${process.env.port}`)
})