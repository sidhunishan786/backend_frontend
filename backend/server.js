import  express  from "express";
// const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send('server is ready');
})

app.get('/api/jokes',(req,res)=>{

    const jokes=[
        {
            id: 1,
            title: 'a',
            content: 'can\'t find an API------1'
        },
        {
            id: 2,
            title: 'b',
            content: 'can\'t find an API------2'
        },
        {
            id: 3,
            title: 'c',
            content: 'can\'t find an API-----3'
        }

    ];

    res.send(jokes);

})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('serving at ${ PORT }')
})