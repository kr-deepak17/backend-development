const express = require('express');


const app = express();
app.get('/',(req,res)=>{
    return res.send("hello from home page"+" hey "+req.query.myname);
})

app.get('/about',(req,res)=>{
    return res.send("hello from about page" +" hey "+req.query.myname);
})

app.listen(8000,()=>{
    console.log("hey server is started !");
})





