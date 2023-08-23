const express = require('express');
const fs = require('fs');
const cors = require('cors');
const {teacherRouter} = require("./routes/Teacher.routes")
const {studentRouter} = require("./routes/Student.routes")
const {routeLogger} = require("./middlewares/Logger.middleware")

const app = express();
app.use(express.json());
app.use(cors());             // this is an external middleware   | cors is allowing to share the resources.

// app.use(routeLogger);           // this is an local middleware or we can say that built middleware


app.use("/student", studentRouter)
app.use("/teacher", teacherRouter)

app.get("/", (req, res) => {
    console.log("Home page");
    res.send("Home Page")
})




// app.get("/data", (req, res) => {
//     let data = fs.readFileSync("./data.json", "utf-8")
    
//     res.send(data)
//     // res.send("Data will be share")
// })




app.listen(5000, () => {
    console.log('Server running on port 5000');
})


//1. if you want your middleware to run for all the routes, put it at the top.

//2. if you want your middleware to work for specific router, put it above those routes only. 

//3. next is a function, besically which will execute the next thing line.