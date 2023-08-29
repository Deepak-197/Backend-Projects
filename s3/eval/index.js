const express = require('express');
require('dotenv').config()
const {connection} = require("./config/db")
const {getRouter} = require("./routes/Get.routes")
const {postRouter} = require("./routes/Post.routes")
const {modifyRouter} = require("./routes/Modify.routes")

const app = express();
app.use(express.json());

app.use("/", getRouter)
app.use("/food/addfood", postRouter)
app.use("/foods", modifyRouter)


app.listen(process.env.port, async() => {

    try{
        await connection
        console.log("Connect to DB")
    }catch(err){
        console.log("Can't connect to DB")
        console.log(err)
    }

    console.log(`Server Running on Port ${process.env.port}`)
})