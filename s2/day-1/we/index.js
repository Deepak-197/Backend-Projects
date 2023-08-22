const http = require('http');
const fs = require("fs");

// console.log(http)

const server = http.createServer((request, response) => {
    if(request.url === "/"){
        response.end("THis is the Home page");
        
    }else if(request.url === "/data"){
        //    fs.readFile("./data.json", (err, data) => {
        //        if(err){
        //         response.write(err);
        //         response.end()
        //        }else{
        //          response.end(data);
        //        }
        //    })

        // response.end("some data will be sent");

        //day-2
        const dataStream = fs.createReadStream("./data.json", 'utf-8')
        dataStream.pipe(response)

    }else if(request.url === "/todos"){
        fs.readFile("./todo_data.json", "utf-8", (err, data) => {
            if(err){
                response.write(err);
                response.end()
            }else{
                response.end(data);
            }
        })
        // response.end("There is a blogs data");
    }else if(request.url === "/adddata" && request.method === "POST"){
        let str = "";
        request.on("data", (chunk) => {
             str += chunk
        })
        request.on("end", () => {
            console.log(str);
        })

        response.end("Data added")
    }else{
        response.end(http.STATUS_CODES["404"])
    }
})



server.listen(7300, () => {
    console.log("Server is running at port 7300")
})