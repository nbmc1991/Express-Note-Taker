// We need to include the path package to get the correct file path for our html
var path = require("path");
const app = require("express");

//ROUTING


    //if no matching route is fine default to home
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
app.get("/notes", function (req, res){
res.sendFile(path.join(__dirname, "../public/notes.html"));

});

module.exports = app ; 

//ROUTE files give the server a "map" of how to respond when user visits or request from diff URLs

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);





