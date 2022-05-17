const express = require('express');
const gateway = require('fast-gateway');
const port = 9001

const server =gateway({
    routes:[
        {
            prefix : '/abc',
            target:'http://localhost:5010/',
            hooks:{
            }
        }
    ]
})

server.get('/my',(req,res)=>res.send("its working"));

server.start(port).then(server=>{
    console.log("API gateway is running");
})