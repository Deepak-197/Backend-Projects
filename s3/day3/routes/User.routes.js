const express = require('express');
const {UserModel} = require("../model/Users.model")

const userRouter = express.Router();

userRouter.get("/",async (req, res) => {
    let query = req.query
    try{
        const users = await UserModel.find(query)
        res.send(users)
    }catch(err){
        res.send({"msg":"Cannot get user.", "error":err.message})
    }
    
})

userRouter.post("/register",async (req, res) => {
    // console.log(req.body)
     try{
        const user = new UserModel(req.body)
        await user.save()

        res.send({"msg":"User has been registered."})
     }catch(err){
        res.send({"msg":"Cannot Register.", "error":err.message})
     }
     
})

userRouter.patch("/update/:id",async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    
    try{
        await UserModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"User has been updated."})
    }catch(err){
        res.send({"msg":"Cannot Modify.", "error":err.message})
    }
})



userRouter.delete("/delete/:id",async (req, res) => {
    const ID = req.params.id;
    // const payload = req.body;
    // res.send(ID)
    try{
        await UserModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"User has been Deleted."})
    }catch(err){
        res.send({"msg":"Cannot Delete.", "error":err.message})
    }
})


module.exports = {
    userRouter
}