const routeLogger = (req, res, next) => {
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    fs.appendFileSync("./routeDetails.txt", `Route Visited: ${req.url} | Method: ${req.method} | Response Time: ${endTime-startTime}ms \n`)
}

module.exports = {routeLogger};