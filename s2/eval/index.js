const express = require('express');
const {movieRouter} = require("./routes/movie.route")
const {seriesRouter} = require("./routes/series.route")

const {logger} = require("./middlewares/logger.middleware")

const app = express();
app.use(express.json());
app.use(logger)



app.get("/", (req, res) => {
    res.send("Home Page");
})

app.use("/movies", movieRouter)
app.use("/series", seriesRouter)

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})


// localhost:8080/movies/6?password=5567&role=admin               // this url for patch and delete for movie/series.