var express = require('express');

var app = express();

var port = process.env.PORT || 3000;


//setting up template engineering
app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// home
app.get('/', routes.home);

// Static files
app.use(express.static('./public'));

//fire controllers
// todoController(app);

// listen to post
app.listen(port);
console.log('listening to port 3000');
