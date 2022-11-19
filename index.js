var express = require('express');
var fs = require('fs');
var app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, './')));
const port = 3000
app.get('/text', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})