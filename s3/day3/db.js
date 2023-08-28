const mongoose = require("mongoose")
require('dotenv').config({ override: true })     // optional mention override


// mongodb atlas link
// mongodb+srv://deepak:<password>@deepak.ml6ptpi.mongodb.net/?retryWrites=true&w=majority

const connection = mongoose.connect(process.env.mongoURL)




module.exports={
    connection
    
}