// We need to include the path package to get the correct file path for our html
 
// const router = require("express").Router();
var path = require("path");

//ROUTING

module.exports = function (app) {

app.get("/notes", function (req, res){
res.sendFile(path.join(__dirname, "../public/notes.html"));

});

//if no matching route is fine default to home
app.get("*", function (req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


};





