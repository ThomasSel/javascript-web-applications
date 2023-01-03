const NotesModel = require('./notesModel');

describe(NotesModel, () => {
  it('creates an empty array', () => {
    const notesModel = new NotesModel();

    expect(notesModel.getNotes()).toEqual([]);
  });

  it('adds two notes', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Note 1');
    notesModel.addNote('Note 2');

    expect(notesModel.getNotes()).toEqual(['Note 1', 'Note 2']);
  });

  it('reset empties notes array', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Note 1');
    notesModel.addNote('Note 2');
    notesModel.reset();

    expect(notesModel.getNotes()).toEqual([]);
  });
});