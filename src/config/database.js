//uzynewbx



//59e13520-8514-4fe8-b67f-0302612393c5

const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017")

const connectDB=async () =>{
    await mongoose.connect('mongodb://localhost:27017/dev-tinder');
}



module.exports = connectDB;