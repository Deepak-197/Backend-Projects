const mongoose = require("mongoose")
require('dotenv').config({ override: true })     // optional mention override

// const main = () => {
//     const connection = mongoose.connect("mongodb://127.0.0.1:27017/university")
// }
// main()


// mongodb atlas link
// mongodb+srv://deepak:<password>@deepak.ml6ptpi.mongodb.net/?retryWrites=true&w=majority

const connection = mongoose.connect(process.env.mongoURL)



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