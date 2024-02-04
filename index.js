const express=require("express")
const dbConnection=require("./dbConnection/connection")

const app=express();

dbConnection();
app.get("/", async(req,res)=>{
    res.send("Hello")
})

const port=process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`)
})