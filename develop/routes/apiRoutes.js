const db = require("../db/db.json");   //path to file were notes are going to be saved
const fs = require("fs");
var path = require("path");
var { v4: uuidv4 } = require("uuid"); // mesage id maker
var express = require("express");
var router = express.Router();

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
    var note = req.body;
    console.log(req.body);
    let id = uuidv4();
    note.id = id;
    db.push(note);
    fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
        if (err) throw err;

        res.json(db);
    })
});

router.delete("/api/notes/:id", (req, res) => {
    console.log(req.params)

    // Get the content of the DB file
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) throw err;
        let parsed = JSON.parse(data)
        let removed = parsed.filter(note => note.id !== req.params.id)
        console.log(removed)
        fs.writeFile("./db/db.json", JSON.stringify(removed), function (err) {
            if (err) throw err;
            res.json(db)
        })
    })

    // Find the one with the ID that matches the id we get from the params
    // IF it si there delete it
    // Res.json done? 
})


module.exports = router;
