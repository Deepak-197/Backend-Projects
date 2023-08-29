const express = require("express");
const {validator} = require("../middlewares/validator.middleware")
const {FoodModel} = require("../models/Food.model")


const postRouter = express.Router();
postRouter.use(validator);

postRouter.post("/", async (req, res) => {
    try{
        let food = new FoodModel.find(req.body)
        await food.save()
        res.send("Book has been added")
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

module.exports = {
    postRouter
}