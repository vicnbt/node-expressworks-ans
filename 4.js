var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.set('views', path.join('templates'));
app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/form', function(req, res) {
    res.render('form');
})
app.post('/form', function(req, res) {
    res.end(req.body.str.split("").reverse().join(""));
})

app.listen(process.argv[2]);

