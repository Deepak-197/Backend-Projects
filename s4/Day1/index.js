const express = require('express');
const {connection} = require("./configs/db")
const {UserModel} = require("./model/User.Model")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Home Page");
})

app.post("/register",async (req, res) => {
    
    const userDetail = req.body
    try{
        const user = new UserModel(userDetail)
        await user.save();
        res.send({"msg":"User Registered"})
    }catch(err){
        res.send({"msg":"Something went wrong.", "Error":err.message})
    }
    
})

app.post("/login", async(req, res) => {
    const {email, pass} = req.body;
    const token = jwt.sign({ course: 'backend' }, 'masai');            // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');  | { foo: 'bar' } this is random payload we can change the name,  
    try{
        const user=await UserModel.find({email, pass})          // {$and: [{email: email} , {password: password}]}  or   // {email: email, password: password}
        if(user.length > 0){
            console.log(user)
            res.send({"msg":"Login Successful.", "token": token})
        }else{
            console.log(user)
            res.send({"msg":"Wrong Credentials."})
        }
    }catch(err){
        res.send({"msg":"Something went wrong.", "Error":err.message})
    }
    
})

app.get("/data", (req, res) => {
    // const token = req.query.token
    const token = req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded) => {                                                  // masai is a secret key we declare in place 'shhhhh'
        // console.log(decoded.foo) // bar
        if(decoded){
            res.send({"msg":"Data is here..."})
        }else{
            res.send({"msg":"Something went wrong.", "Error":err.message})
        }
      });
})

app.get("/cart", (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded) => {                                                  // masai is a secret key we declare in place 'shhhhh'
        // console.log(decoded.foo) // bar
        if(decoded){
            res.send({"msg":"Cart Product Data..."})
        }else{
            res.send({"msg":"Something went wrong.", "Error":err.message})
        }
      });
    
})

app.get("/about", (req, res) => {
    res.send("ABOUT Page");
})

app.listen(8000, async() => {

    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log(err);
    }

    console.log(`Running at port 8080`)
})