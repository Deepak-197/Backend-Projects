const fs = require('fs');

const logger = (req, res, next) => {
    const start_time = new Date().getTime();
    next();
    const end_time = new Date().getTime();
    fs.appendFileSync("./logs.txt", `Method: ${req.method} | Route: ${req.url} | user-agent: ${req.headers} | Response Time: ${end_time - start_time}ms \n`);
}

module.exports = {
    logger
}