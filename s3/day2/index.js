const express = require("express")
const {connection, UserModel} = require("./db")

const app = express()
app.use(express.json())

app.get("/",async (req, res) => {
    try{
        const users = await UserModel.find()
        res.send(users)
    }catch(err){
        res.send({"msg":"Cannot get user.", "error":err.message})
    }
    res.send("WELCOME")

})

app.get("/users",async (req, res) => {
    let query = req.query
    try{
        const users = await UserModel.find(query)
        res.send(users)
    }catch(err){
        res.send({"msg":"Cannot get user.", "error":err.message})
    }
    
})

app.post("/register",async (req, res) => {
    // console.log(req.body)
     try{
        const user = new UserModel(req.body)
        await user.save()

        res.send({"msg":"User has been registered."})
     }catch(err){
        res.send({"msg":"Cannot Register.", "error":err.message})
     }
     
})

app.patch("/update/:id",async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    
    try{
        await UserModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"User has been updated."})
    }catch(err){
        res.send({"msg":"Cannot Modify.", "error":err.message})
    }
})



app.delete("/delete/:id",async (req, res) => {
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

app.listen(4500, async() => {
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot Connect to the DB")
        console.log(err)
    }
    
    console.log("Server is running at port 4500")
})