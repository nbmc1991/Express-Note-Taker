const db = require("../db/db.json");   //path to file were notes are going to be saved
const fs = require("fs");
var path = require("path");
var {v4: uuidv4} = require("uuid"); // mesage id maker
var express = require("express");
var router =express.Router();

//GET ROUTE
//returns notes.html
router.get("/notes"), (req, res) => {
    res.json(db);
};

//returns all the notes
router.get("/api/notes", (req, res) => {
    res.json(db);
});


// POST route
router.post("/api/notes", (req, res) => {
    var note =req.body;
    console.log(req.params.id);
    let id = uuidv4();
    note.id=id; 
    db.push(note);
    fs.writeFile(path.join(__dirname, "/db/db.json"),
    JSON.stringify(db),
    (err) => {
        if (err) throw err;
    });
    res.json(db);
});


module.exports = router ;
