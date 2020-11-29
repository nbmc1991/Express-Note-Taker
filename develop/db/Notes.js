// const util = require("util");
// const fs = require("fs");
// const { v4: uuidv4 } = require('uuid');

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Notes {
//     read() {
//         return readFileAsync("db/db.json", "utf8")
//     }
//     write(note){
//         return writeFileAsync("db/db.json", JSON.stringify(note))
//     }
//     getNotes(){
//         return this.read().then(notes => {
//             let readNotes = []
//             try {
//                 readNotes = readNotes.concat(JSON.parse(notes))
//             } catch (err){
//                 readNotes= [];
//             }
//             return readNotes;
//         })
//     }
//     writeNote(note){
//         const {title, text} = note;
//         const newNote = {
//             title: title,
//             text: text,
//             id:uuidv4()
//         }
//         return this.getNotes().then(notesArr => [...notesArr, newNote]).then(updatedNotes => this.write(updatedNotes)).then(()=> newNote)
//     }
//     deleteNote(id){
//         return this.getNotes().then(notesArr=> notesArr.filter(note=> note.id !==id)).then(filterNotes=>this.write(filterNotes))
//     }
// }
// module.exports = new Notes();