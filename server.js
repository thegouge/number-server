const express = require('express');
const app = express();

var counter = 0;

var port = 3000;

app.get('/', (req, res) => {
    counter++;
    res.send(`you are person number ${counter} visiting the webpage!`);
});

app.listen(port, () => console.log('Server Running at localhost:' + port));