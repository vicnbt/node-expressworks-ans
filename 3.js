var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join('templates'));


app.use(express.static('public'));

app.set('view engine', 'jade');
app.get('/home', function(req, res) {
    res.render('index',{date:new Date().toDateString()});
})


app.listen(process.argv[2]);

