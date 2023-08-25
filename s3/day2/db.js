const mongoose = require("mongoose")

// const main = () => {
//     const connection = mongoose.connect("mongodb://127.0.0.1:27017/university")
// }
// main()

const connection = mongoose.connect("mongodb://127.0.0.1:27017/university")



//Basic Structure of the data = Schema
const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    age: {type:Number, required:true},
    city: {type:String, required:true},
    language: {type:String, required:true},
    is_married: {type:Boolean, required:true}
},{
    versionKey:false
})

//Model for the data

const UserModel = mongoose.model("user", userSchema)

module.exports={
    connection,
    UserModel
}