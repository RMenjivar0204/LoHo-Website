var express             = require("express");
var app                 = express();
var bodyParser          = require("body-parser");
var expressSanitizer    = require("express-sanitizer");
var methodOverride      = require("method-override");
var mongoose            = require("mongoose");


// ROUTES

var indexRoutes = require("./routes/index");


// APP CONFIG

// mongoose.connect("mongodb://localhost/loho_website", { useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


// MONGOOSE/MODEL CONFIG




// INDEX ROUTE
app.use("/", indexRoutes);

// NEW ROUTE

// CREATE ROUTE

// SHOW ROUTE 

// EDIT ROUTE

// UPDATE ROUTE

// DESTROY ROUTE



app.listen(3000, function(){
    console.log("Listening on Port 3000");
})