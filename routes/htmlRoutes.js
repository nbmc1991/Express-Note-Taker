// We need to include the path package to get the correct file path for our html
var path = require("path");
const router = require("express").Router();

//ROUTING
//wild card ** if no matching route is fine default to home
router.get("*", (req, res) => res.sendFile(__dirname, "../public/index.html"));

router.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));



module.exports = router;







