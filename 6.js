var express = require('express'),
    path = require('path'),
    app = express();

app.put('/message/:NAME', function(req, res){
    res.end(
        require('crypto')
            .createHash('sha1')
            .update(new Date().toDateString() + req.params.NAME)
            .digest('hex')
    );
});

app.listen(process.argv[2]);


