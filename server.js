var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

 
// POST /login gets urlencoded bodies
app.post('/', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies
app.post('/api/survey', bodyParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
})

require("./app/routing/htmlRouts")(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});