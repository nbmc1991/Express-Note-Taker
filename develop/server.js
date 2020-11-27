// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require("express");


//tells node we are creating a n 'express' server
var app = express();


// const fs =require("fs");
// const view = require("./routes/htmlRoutes");
// Sets an initial port. Will use later in listener 
var PORT = process.env.PORT || 8080;

// FIND CORRECT MEANING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
//will map server to different possible routes ...different pages within
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER STARTS COMMUCATION/SERVER
app.listen(PORT, function (){
    console.log( "App is listening on PORT:" + PORT);
});