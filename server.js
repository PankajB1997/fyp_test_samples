var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var rest = require("./api");
var api = new rest(app);

app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port!");
});
