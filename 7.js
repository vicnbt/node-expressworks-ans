var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get('/search', function(req,res){
   console.log(req.query);
    res.end(JSON.stringify(req.query));
});

app.listen(process.argv[2]);


