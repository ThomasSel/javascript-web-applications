/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require("./notesView")

describe(NotesView, () => {

  let notesModel, notesView;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    notesModel = new NotesModel();
    notesView = new NotesView(notesModel);
  })

  it('display notes is empty', () => {
    notesView.displayNotes();

    expect(document.querySelectorAll('.note').length).toBe(0);
  });

  it('displays two notes', () => {
    notesModel.addNote('note 1');
    notesModel.addNote('note 2');
    notesView.displayNotes();

    expect(document.querySelectorAll('.note').length).toBe(2);
  })

  it('user inputs two notes with a button', () => {
    const textInputEl = document.querySelector('#text-input');
    const buttonEl = document.querySelector('#input-button');
    
    textInputEl.value = 'Note 1';
    buttonEl.click();
    expect(textInputEl.value).toBe('');

    textInputEl.value = 'Note 2';
    buttonEl.click();
    expect(textInputEl.value).toBe('');

    const notes = document.querySelectorAll('.note');
    expect(notes.length).toBe(2)
    expect(notes[0].textContent).toBe('Note 1');
    expect(notes[1].textContent).toBe('Note 2');
  })
})
