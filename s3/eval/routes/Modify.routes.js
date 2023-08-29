const express = require('express');
const {FoodModel} = require("../models/Food.model")
const {record} = require("../middlewares/record.middleware")

const modifyRouter = express.Router();
modifyRouter.use(record)

modifyRouter.patch("/update/:id", async (req, res)=> {
    let id = req.params.id;

    try{
        await FoodModel.findByIdAndUpdate({"_id":id}, req.body);
        res.send(`Updated the dish whose id is ${id}`)
    }catch(err){
        console.log(err);
        res.send({"err":"Something went wrong"})
    }
})

modifyRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    try{
        await FoodModel.findByIdAndDelete({"_id":id});
        res.send(`Deleted the dish whose id is ${id}`)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

module.exports={
    modifyRouter
}