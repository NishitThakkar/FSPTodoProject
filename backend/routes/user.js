var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var client = new MongoClient('mongodb+srv://nishit:thakkar@cluster0.xfctg.mongodb.net/todo?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })

var connection;

client.connect(function (err, db) {
    if (!err) {
        connection = db
        console.log("user db connected");
    } else {
        console.log("db not connected");
    }
});

router.post('/login', bodyParser.json(), function (req, res) {

    var users = connection.db('todo').collection('users');

    users.findOne({ email: req.body.email, password: req.body.password }, function (err, doc) {

        if (doc) {
            res.send({ status: "ok", data: doc })
        } else {
            res.send({ status: "not ok", err })
        }
    })

})

router.post('/creat_account', bodyParser.json(), function (req, res) {
    var users = connection.db('todo').collection('users')

    users.findOne({ email: req.body.email }).then(function (same) {
        if (same) {
            res.send("Email Id is available")
        } else {

            users.insert(req.body, function (err, result) {
                if (!err) {
                    res.send("Thank you for using our application")
                } else {
                    res.send(err)
                }
            })
        }
    })

})

module.exports = router