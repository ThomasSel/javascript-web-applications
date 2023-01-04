const NotesModel = require('./notesModel');

describe(NotesModel, () => {
  let notesModel;
  beforeEach(() => {
    notesModel = new NotesModel();
  });
  
  it('creates an empty array', () => {
    expect(notesModel.getNotes()).toEqual([]);
  });

  it('adds two notes', () => {
    notesModel.addNote('Note 1');
    notesModel.addNote('Note 2');

    expect(notesModel.getNotes()).toEqual(['Note 1', 'Note 2']);
  });

  it('reset empties notes array', () => {
    notesModel.addNote('Note 1');
    notesModel.addNote('Note 2');
    notesModel.reset();

    expect(notesModel.getNotes()).toEqual([]);
  });

  it('setNotes replaces the notes with the given array', () => {
    notesModel.addNote('Note 1');
    notesModel.setNotes(['Note 2', 'Note 3']);
    expect(notesModel.getNotes()).toEqual(['Note 2', 'Note 3']);
  });
});