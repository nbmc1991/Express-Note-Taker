//linking our empty array that holds saved notes
var savedNotes = require("../db/Notes");


module.exports = function (app){
    
    app.get("/api/notes", function(req,res){
        res.json(savedNotes);
    });
    

    //POST
    app.post("/api/notes", function (req, res){
        // Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
        if (savedNotes.length <5){
            savedNotes.push(req.body);
            res.json(true);
        }
        else{
            return "Please, try again later." +false;
        }
    
    });
    
};
