const db = require("../db/db.json");   //path to file were notes are going to be saved
const fs = require("fs");
var path = require("path");
var {v4: uuidv4} = require("uuid"); // mesage id maker
var express = require("express");
var router =express.Router();

//GET ROUTE

router.get("../public/assets/js/index.js"), (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
};

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
}); // ROUTES interact iwth publix index html db

router.get("/notes", (req, res)=> {
    res.sendFile(path.join(__dirname, "public/notes.html"), (err) => {
        if(err) throw err;
        console.log(err);
    })
})

router.get("/api/notes"), (req, res) => {
    res.json(db);
};


//POST route

router.post("/api/notes", (req, res) => {
    res.json(db);
    //capture note saved by user
    const newNote = req.body;
    const noteId = uuidv4();
    // add id to object
    newNote.noteId = id;
    db.push(newNote); //pushes newNote to db file variable

    fs.writeFile(path.join(__dirname, "/db/db.json"),
    JSON.stringify(db),
    (err) => {
        if (err) throw err;
    });
    res.json(db);
});

module.exports = router ;
