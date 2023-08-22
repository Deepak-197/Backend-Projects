const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json())  //middleware


app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>HOME PAGE</h1>")
})


app.get("/data", (req, res) => {
    const dataStram=fs.createReadStream("./data.json","utf-8");
    dataStram.pipe(res)
})


app.post("/adddata", (req, res) => {
    console.log(req.body)
    res.send("Data has been added")
})

app.get("/students", (req, res) => {
    const data=fs.readFileSync("./data.json","utf-8")
    const parsed_data=JSON.parse(data);
    // console.log(data.student)
    res.send(parsed_data.student)
})


app.post("/addstudent", (req, res) => {
    //step1 => get the complete data
    const data=fs.readFileSync("./data.json", "utf-8")
    // step2 => Parse to add the data
    const parsed_data = JSON.parse(data)
    // step3 => add the data in students
    parsed_data.student.push(req.body)
    //addinng to the data file
    fs.writeFileSync("./data.json", JSON.stringify(parsed_data))
    console.log(parsed_data)
    res.send("Data has been entered in DB file.")
})

app.delete("/deletestudent", (req, res) => {
    //step1 => get the complete data
    const data=fs.readFileSync("./data.json", "utf-8")
    // step2 => Parse to add the data
    const parsed_data = JSON.parse(data)
    const new_student_data = parsed_data.student.filter((ele) => {
        return ele.name !== "Deepak"
    })
    console.log(new_student_data)
    res.send("Deleted Succesfully.")
})

app.get("/teachers", (req, res) => {
    const data=fs.readFileSync("./data.json","utf-8")
    const parsed_data=JSON.parse(data);
    // console.log(data.teachers)
    res.send(parsed_data.teachers)
})

app.listen(4500,  () => {
    console.log("Server is running on port 4500");
})