const express = require('express')

const studentRouter = express.Router()

studentRouter.get("/getstudents", (req, res) => {
    
    res.send({"mag":"All the students details"})
})

studentRouter.post("/addstudent", (req, res) => {
    console.log(req.body);
    res.send({"mag":"Added the student"})
})

module.exports = {
    studentRouter
}
