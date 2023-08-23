const express = require('express')

const teacherRouter = express.Router()

teacherRouter.get("/getteachers", (req, res) => {
    
    res.send({"mag":"All the teachers details"})
})

teacherRouter.post("/addteacher", (req, res) => {
    console.log(req.body);
    res.send({"mag":"Added the teachers"})
})

module.exports = {
    teacherRouter
}