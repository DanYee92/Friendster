var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var path=require("path");
var PORT = process.env.PORT || 3000;


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//require the htmlRoutes.js file and pass it in the app variable to connect it to the module.exports function in htmlRoutes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
