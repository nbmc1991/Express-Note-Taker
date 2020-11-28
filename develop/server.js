// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require("express");
const fs = require("fs");
// const { allowedNodeEnvironmentFlags } = require("process");
var database = require("../develop/db/db.json");  //getting db file to make changes in the notes
//tells node app is express app
var app = express();
// Sets an initial port. Will use later in listener 
var PORT = process.env.PORT || 8080;

app.use(express.static("public")); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 
app.use(express.urlencoded({ extended: true }));   //using the app to express acess to the body requirements (req) function 
app.use(express.json());


app.get("public/assets/js/index.js"), function (req, res){
    res.sendFile(path.join(__dirname, "public/assets/js/index.js"))
};     //express reaching out to index.js to send file after respond

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "public/index.html"))
 }); //ROUTES interact with public index html database:


app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.get("/api/notes", function(req, res){
    return res.json();
   
});  //API ROUTES interact with notes api db



//LISTENER STARTS COMMUCATION/SERVER
app.listen(PORT, function (){
    console.log( "App is listening on PORT:" + PORT);
});


app.post("/api/notes", function (req, res){

});