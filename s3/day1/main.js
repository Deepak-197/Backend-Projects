const mongoose = require("mongoose");

const main = async() => {
    try{

        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/backend");              // backend is the name of database
        console.log("Connected to DB")

        // await StudentModel.insertMany([{name:"Chunnu", age:23, city:"Delhi"}])

        // const student = await StudentModel({
        //     name:"Pulkit",
        //     age:28,
        //     city:"Delhi",
        // })
        //  await student.save()
        console.log("Following is the data from DB")
        const student = await StudentModel.deleteMany({$and: [{age: {$gte:25}}, {age: {$lte:26}}]})
        console.log(student)
        connection.disconnect()
        console.log("Disconnected from MongoDB")

    }catch(err){

       console.log(err)

    }

}

main()


//Creating structure of the data that i want to store in DB

const studentSchema = mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    city: {type:String, required:true},
},{
    versionKey:false
})


// Creating the Model
const StudentModel = mongoose.model("student", studentSchema)            // student is the name of collection