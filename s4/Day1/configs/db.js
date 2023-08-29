const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://deepak:deepak@deepak.ml6ptpi.mongodb.net/nemauth?retryWrites=true&w=majority")

module.exports={
    connection
}