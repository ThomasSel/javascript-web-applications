const NotesModel = require('./notesModel');

console.log('The notes app is running');

const notesModel = new NotesModel();
console.log(notesModel.getNotes());
