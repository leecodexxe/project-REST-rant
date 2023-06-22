const express = require('express')
const app = express()
require('dotenv').config()

app.use('/places',require('./controllers/places'))

app.get('/',(req,res) => {
    res.send('hello world')
})

app.get('*',(req,res) => {
    res.status(404).send('404 Not the right page :)')
})

app.listen(process.env.PORT)