var express = require('express');
var router = express.Router();
var bodyPareser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var objectId = require('mongodb').ObjectId;
const { ObjectId, ObjectID } = require('mongodb');
const bodyParser = require('body-parser');

var client = new MongoClient('mongodb+srv://nishit:thakkar@cluster0.xfctg.mongodb.net/todo?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })

var connection;

client.connect(function (err, db) {
    if (!err) {
        connection = db
        console.log("todo db connected");
    } else {
        console.log(err);
    }
})

router.get('/list_todo', function (req, res) {

    var all_todo = connection.db('todo').collection('allTodo');

    all_todo.find().toArray(function (err, docs) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.get('/delete_todo', function (req, res) {

    var all_todo = connection.db('todo').collection('allTodo');

    all_todo.remove({ _id: ObjectId(req.query.did) }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

router.post('/create_todo', bodyPareser.json(), function (req, res) {

    var all_todo = connection.db('todo').collection('allTodo');
    console.log("req.body", req.body);
    all_todo.insert(req.body, function (err, result) {
        if (!err) {
            res.send('Created')
        } else {
            res.send(err)
        }
    })
})

router.get('/todo_byid', function (req, res) {

    var all_todo = connection.db('todo').collection('allTodo');

    all_todo.find({ _id: ObjectID(req.query.uid) }).toArray(function (err, doc) {

        if (!err) {
            res.send(doc);
        } else {
            res.send("err")
        }
    })
})

router.post('/updatTodo', bodyParser.json(), function (req, res) {

    var all_todo = connection.db('todo').collection('allTodo');
    all_todo.update({ _id: objectId(req.body._id) }, {
        $set: {
            title: req.body.title, subTask: req.body.subTask,checkbox: req.body.checkbox
        }
    }, function (err, result) {
        if (!err) {
            res.send("updated")
        } else {
            res.send({ err })
        }
    })
})


module.exports = router