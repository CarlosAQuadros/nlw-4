import express from 'express'

const app = express()

app.get("/", (req, res)=>{
    return res.json({message:"hello world", author:"eu mesmo"})
});
app.post("/", (req, res)=>{
    return res.json({message:"hello world", author:"eu messsssssmo"})
});

app.listen(3333, ()=> console.log("server running !!!!"));

