var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("Home Page");
})

app.listen(3000, function(){
    console.log("Listening on Port 3000");
})