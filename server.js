const express = require('express');
const app = express();
const path = require('path');

var counter = {
    count: 0
};

var port = 3000;

app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
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