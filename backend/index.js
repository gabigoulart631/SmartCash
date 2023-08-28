const express = require("express");
const app = express();
app.listen(3000,()=> console.log("aplicação está rodando."));
app.get('/', (req,res)=>{
    res.send("está rodando")
})
app.get('/cachorro', (req,res)=>{
    res.send("AuAu")
})

const dados = [];
app.get('/j',(req,res)=>{res.json({dados})})
