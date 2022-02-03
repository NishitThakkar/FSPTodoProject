const express = require('express');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
// var ObjectId = require("mongodb").ObjectId
var ObjectId = require("mongodb").ObjectId


app.use(cors())
app.use('/', require('./routes/todo'))
app.use('/', require('./routes/user'))

app.listen(5000, () => {
    console.warn("SERVER STARTED");
})