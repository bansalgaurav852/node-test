var express = require('express');
var mongo = require('mongodb');

var fs = require('fs');
var app = express();
const path = require('path');
/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"; */

/* MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
}); */
app.use(express.static(path.join(__dirname, './')));
const port = 3000
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "text.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})