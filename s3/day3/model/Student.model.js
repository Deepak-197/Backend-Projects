const mongoose = require('mongoose')

//Basic Structure of the data = Schema
const studentSchema=mongoose.Schema({
    name:{type:String, required:true},
    city: {type:String, required:true},
},{
    versionKey:false
})

//Model for the data

const StudentModel = mongoose.model("student", studentSchema)


module.exports={
    StudentModel
}