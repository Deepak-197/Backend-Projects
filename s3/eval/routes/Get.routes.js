const express = require("express");
const {FoodModel} = require("../models/Food.model")


const getRouter = express.Router();

getRouter.get("/food", async (req, res) => {

       const {min, max, cuisine, price} = req.query;

       let obj = {}

       if(min && max){
         obj.rating = {$lt: max, $gt: min}
       }

       if(cuisine){
         obj.cuisine = cuisine
       }

       if(price){
         obj.price = {$lt: price}
       }

       try{
         
          let foods = await FoodModel.find(obj)
          res.send(foods)

       }catch(err){
         
          console.log(err)
          res.send({"err": "Something went wrong"})

       }

})

module.exports = {
    getRouter
}