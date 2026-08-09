
import express from "express";


const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello from Express and Nodejs!");
})

app.get("/about", (req,res)=>{
    res.send("This is the about page");
})
app.get("/home", (req,res)=>{
    res.send("This is the home page");
})

app.listen(PORT,()=>{
    console.log(`Server listing at PORT: ${PORT}`)
})
