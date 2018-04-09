const express = require('express');
const app = express();
const path = require('path');

var counter = 0;

var port = 3000;

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log('Server Running at localhost:' + port);
});

/* 
    Response Status codes
        100: ???
        200: success
        300: redirect
        400: client side error
        500: server error

    unpkg = unpackage = host for different js stuffs
*/