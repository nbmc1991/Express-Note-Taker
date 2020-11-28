// We need to include the path package to get the correct file path for our html
var path = require("path");

//ROUTING

module.exports = function (app) {
    //if no matching route is fine default to home
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
app.get("/notes", function (req, res){
res.sendFile(path.join(__dirname, "../public/notes.html"));

});

};

//ROUTE files give the server a "map" of how to respond when user visits or request from diff URLs

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);





