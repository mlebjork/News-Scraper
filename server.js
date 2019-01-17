var express = require('express');
var mongoose = require('mongoose');
var exphbs  = require('express-handlebars');

var app = express()
var PORT = process.env.PORT || 3000
var routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(routes);
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
