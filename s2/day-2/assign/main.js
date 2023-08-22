const express = require('express')
const fs = require('fs');

const app = express();


app.use(express.json());

const filename = 'todos.json';

app.get("/", (req, res) => {
    fs.readFile(filename, (err, data) => {
        if(err){
            res.status(500).send({message: 'Error reading file: ' +err.message});
        }else{
            res.send(JSON.parse(data))
        }

    })
})

app.post("/add", (req, res) => {
    const data=fs.readFileSync("./todos.json", "utf-8")
    // step2 => Parse to add the data
    const parsed_data = JSON.parse(data)
    // step3 => add the data in students
    parsed_data.todo.push(req.body)
    //addinng to the data file
    fs.writeFileSync("./todos.json", JSON.stringify(parsed_data))
    console.log(parsed_data)
    res.send("Data has been entered in todos DB file.")
})




app.listen(4000, () => {
    console.log("Todo API Server started on port 3000");
})