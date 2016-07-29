var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    app = express();

fs.readFile(process.argv[3], 'utf8', function(err,contents){
    app.get('/books', function(req,res){
        res.end(JSON.stringify(JSON.parse(contents.toString())));
    });
    app.listen(process.argv[2]);
});


