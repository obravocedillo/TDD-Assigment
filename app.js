const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


let list = []

app.get('/', function (req, res){
    res.status(200).send('Hello world');
})

module.exports = app;