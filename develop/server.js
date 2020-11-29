// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const fs = require("fs");
var db = require("../develop/db/db.json");  //getting db file to make changes in the notes
var { v4: uuidv4 } = require("uuid");    // id maker
var app = express();   //tell node its an express app
const notes = require("./db/Notes");
var path =require("path");
var PORT = process.env.PORT || 8080;    // Sets an initial port. Will use later in listener 

//middleware
app.use(express.static(path.join(__dirname,"public"))); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 
app.use(express.urlencoded({ extended: true }));   //using the app to express acess to the body requirements (req) function 
app.use(express.json());



//ROUTES
// app.get("public/assets/js/index.js"), function (req, res){
//     res.sendFile(path.join(__dirname, "public/assets/js/index.js"))
// };     //express reaching out to index.js to send file after respond

// app.get("/", function(req, res){

//     res.sendFile(path.join(__dirname, "public/index.html"))
//  }); //ROUTES interact with public index html database:


app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"), function (err){
        if (err) throw err;
    })
});


//returns all notes
app.get("/api/notes", function(req, res){
   res.json(db);
   
});  //API ROUTES interact with notes api db

app.post("/api/notes", function (req, res){
var newNote = req.body;
console.log(req.params.id); 
let id = uuidv4();     //this will generate a unique id with the uuid package
newNote.id = id;
db.push(newNote); //pushes newNote to db file variable
fs.writeFile(path.join(__dirname, "/db/db.json"),
JSON.stringify(db),
(err)=>{
    if (err) throw err;
});
res.json(db);
});   //function when user POST/saves a note





//LISTENER STARTS COMMUCATION/SERVER
app.listen(PORT, function (){
    console.log( "App is listening on PORT:" + PORT);
});

