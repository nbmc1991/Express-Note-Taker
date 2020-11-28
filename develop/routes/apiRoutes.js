//creating an empty array to hold saved notes

var savedNotesArray =[
    {
        noteTitle:"Today was a Good Day",
        writtenNote:"bla bla bla"
    },
];

//export the file to make it accessible for other files to use using require
module.exports= savedNotesArray ;

require("./htmlRoutes")(app);
require("./apiRoutes")(app);





// module.exports = function (app){
    
//     app.get("/api/notes", function(req,res){
//         res.json(savedNotes);
//     });
    

//     //POST
//     app.post("/api/notes", function (req, res){
//         // Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
//         if (savedNotes.length <5){
//             savedNotes.push(req.body);
//             res.json(true);
//         }
//         else{
//             return "Please, try again later." +false;
//         }
    
//     });
    
// };
