const express = require('express');
const app = express();
const path = require('path');

var counter = {
    count: 0
};

var port = 3000;

app.use(express.static(__dirname + "/docs"));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${port}`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "docs", "index.html"));
});

app.put('/', (req, res) => {
    res.send(counter);
    console.log('counter request!');
})

app.get('/minus', (req, res) => {
    counter.count--;
    res.send(counter);
    console.log('minus one!');
});

app.get('/plus', (req, res) => {
    counter.count++;
    res.send(counter);
    console.log('plus one!');
});

app.listen(port, () => {
    console.log('Server Running at localhost:' + port);
});