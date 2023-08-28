const express = require('express');
const {StudentModel} = require("../model/Student.model")

const studentRouter = express.Router();

studentRouter.get("/",async (req, res) => {
    let query = req.query
    try{
        const students = await StudentModel.find(query)
        res.send(students)
    }catch(err){
        res.send({"msg":"Cannot get user.", "error":err.message})
    }
    
})

studentRouter.post("/register",async (req, res) => {
    // console.log(req.body)
     try{
        const students = new StudentModel(req.body)
        await students.save()

        res.send({"msg":"User has been registered."})
     }catch(err){
        res.send({"msg":"Cannot Register.", "error":err.message})
     }
     
})

studentRouter.patch("/update/:id",async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    
    try{
        await StudentModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"User has been updated."})
    }catch(err){
        res.send({"msg":"Cannot Modify.", "error":err.message})
    }
})



studentRouter.delete("/delete/:id",async (req, res) => {
    const ID = req.params.id;
    // const payload = req.body;
    // res.send(ID)
    try{
        await StudentModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"User has been Deleted."})
    }catch(err){
        res.send({"msg":"Cannot Delete.", "error":err.message})
    }
})


module.exports = {
    studentRouter
}