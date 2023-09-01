const express = require('express');
const {UserModel} = require("../model/User.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userRouter = express.Router();


userRouter.post("/register",async (req, res) => {
    const {name, email, pass} = (req.body)
    try{
        bcrypt.hash(pass, 5, async (err, hash) => {
            if(err){
                res.send({"msg":"Something went wrong.", "err":err.message})
            }else{
                const user =new UserModel({name, email, pass:hash})
                await user.save();
                res.send({"msg":"New User has been registered"})
            }
        });
        
    }catch(err){
        res.send({"msg":"Something went wrong.", "err":err.message})
    }
    
})

userRouter.post("/login",async (req, res) => {
    const {email, pass} = (req.body)
    try{
        const user =await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(pass, user[0].pass, (err, result)=>{
                if(result){
                    const token = jwt.sign({userID:user[0]._id}, "masai")             // const token = jwt.sign({course:"backend"}, "masai") for the user in token random payload we put userID for user identification.
                    res.send({"msg":"Logged in", "token":token})
                }else{
                    res.send({"msg":"Wrong Credentials"})
                }
            });
            
        }else{
            res.send({"msg":"Wrong Credentials"})
        }
        
    }catch(err){
        res.send({"msg":"Something went wrong.", "err":err.message})
    }
    
})

module.exports={
    userRouter
}