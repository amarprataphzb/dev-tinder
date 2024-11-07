
const express = require('express');
const app = express();

app.use("/",(req,res)=>{
    res.send("home page")
})

app.use("/hello",(req,res)=>{
    res.send("Hello from Hello route")
})

app.use("/test",(req,res)=>{
    res.send("Hello from Hello test route")
})



app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})