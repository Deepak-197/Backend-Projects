const express = require('express');
const {validator} = require("../middlewares/validator.middleware")
const fs = require('fs');


const seriesRouter = express.Router();

seriesRouter.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    res.send(data.series)
})


seriesRouter.get("/:seriesId", (req, res) => {
    const id = req.params.seriesId
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    let response = data.series.filter((el) => {
        return el.series_id == id;
    })
    res.send(response)
})


seriesRouter.post("/addseries",  (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.series.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Series has been added")
})


seriesRouter.patch("/:seriesId", validator,  (req, res) => {
     const id = req.params.seriesId;
     const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

     data.series.map((el) => {
         if(el.series_id == id){
            if(req.body.genre)
                 el.genre = req.body.genre
            else if(req.body.director)
                el.director = req.body.director
            else if(req.body.name)
                el.name = req.body.name
           
        }
     })

     fs.writeFileSync("./db.json",  JSON.stringify(data))
     res.send("Updated Series Detail")
})

seriesRouter.delete("/:seriesId", validator, (req, res) => {
    const id = req.params.seriesId;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    data.series = data.series.filter((el) => {
        return el.series_id != id
    })

    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Deleted Series Detail")
})


module.exports = {
    seriesRouter
}


