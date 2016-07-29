var express = require('express'),
    path = require('path'),
    app = express();

app.use(require('stylus').middleware('public'))

app.use(express.static('public'));


app.listen(process.argv[2]);


