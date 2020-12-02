// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");
var app = express();  //tells node its an express app
var path = require("path");
var router =express.Router();

//PORT
var PORT = process.env.PORT || 8080;    // Sets an initial port. Will use later in listener 


//middleware
app.use(express.static(path.join(__dirname +"public"))); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 
app.use(express.urlencoded({ extended: true }));   //using the app to express acess to the body requirements (req) function 
app.use(express.json());


app.use("/", htmlRoutes);





//LISTENER STARTS COMMUCATION/SERVER
app.listen(PORT, function (){
    console.log( "App is listening on PORT:" + PORT);
});

