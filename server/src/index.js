const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const mongoPostRouter = require('./routes/mongoPost')

app.use(cors())
app.use(bodyParser.json())


app.get('/', (req,res) => {
    res.send("Hello")
})

app.use('/post', mongoPostRouter)

app.listen(port, ()=> console.log("Server Running"))