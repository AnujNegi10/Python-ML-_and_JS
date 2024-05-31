require('dotenv').config()
const express = require('express')//common js The require function is a built-in function in Node.js used to load modules. This function call returns the module's exports

//import express from "express"//module js
//express -> object

const app = express() //app is a variable , app contains various funcs of express 

const port = 3000

//getRequest
// /:home route pe listen karo

//if gets a request then send a callback 
// (req, res) => {
//     res.send('Hello World!')
// })

app.get('/', (req, res) => {
    res.send('Hello World!')
})
//response send hello world

app.get('/tweet' , (req,res)=> {
    res.send('anuj negi')
})

app.get('/login',(req,res)=>{
    res.send('<h1>HEYY VS HERE')
})

//cannot GET :hot reloading -> when a file is saved everything is automatically restarted , the code is processed and not avai , so we need to reload again
//so stop and start again

app.get('/newbie',(req,res)=>{
    res.send('heyyyy')
})

//process changedvar.env.PORTatenv
 
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

