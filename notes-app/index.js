const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log('The notes app is running');

const notesModel = new NotesModel();
console.log(notesModel.getNotes());

const notesView = new NotesView(notesModel);
console.log(notesModel.addNote('Note 1'));
console.log(notesModel.addNote('Note 2'));
notesView.displayNotes();