const express = require('express');
const cors = require("cors")
app = express()

app.use(cors())
app.use(express.static("./static"))

app.get("/",(req,res,next)=>{
    console.log("incomming req");
    res.send("hello world nodejs service :)")
})

app.get("/hello",(req,res,next)=>{
    console.log("incomming req");
    res.send("hello world file hosting service :)")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("my app is runing on: ", PORT)
})
