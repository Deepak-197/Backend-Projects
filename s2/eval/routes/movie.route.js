const express = require('express');
const {validator} = require("../middlewares/validator.middleware")
const fs = require('fs');


const movieRouter = express.Router();

movieRouter.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    res.send(data.movies)
})


movieRouter.get("/:movieId", (req, res) => {
    const id = req.params.movieId
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    let response = data.movies.filter((el) => {
        return el.movie_id == id;
    })
    res.send(response)
})


movieRouter.post("/addmovie", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.movies.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Movie has been added")
})


movieRouter.patch("/:movieId", validator, (req, res) => {
     const id = req.params.movieId;
     const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

     data.movies.map((el) => {
         if(el.movie_id == id){
            el.genre = req.body.genre
            // el.director = req.body.genre
        }
     })

     fs.writeFileSync("./db.json",  JSON.stringify(data))
     res.send("Updated Movie Detail")
})

movieRouter.delete("/:movieId", validator, (req, res) => {
    const id = req.params.movieId;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    data.movies = data.movies.filter((el) => {
        return el.movie_id != id
    })

    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("Deleted Movie Detail")
})


module.exports = {
    movieRouter
}


