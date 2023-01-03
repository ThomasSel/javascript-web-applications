/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require("./notesView")

describe(NotesView, () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  it('display notes is empty', () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesView.displayNotes();

    expect(document.querySelectorAll('.note').length).toBe(0);
  });

  it('displays two notes', () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote('note 1');
    notesModel.addNote('note 2');
    notesView.displayNotes();

    expect(document.querySelectorAll('.note').length).toBe(2);
  })
})