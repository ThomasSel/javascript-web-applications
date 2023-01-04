class NotesView {
  constructor(notesModel, notesClient) {
    this.notesModel = notesModel;
    this.notesClient = notesClient;
    this.mainContainer = document.querySelector('#main-container');
    
    const textInput = document.querySelector('#text-input');

    document.querySelector('#input-button').addEventListener('click', () => {
      notesModel.addNote(textInput.value);
      this.displayNotes();
      notesClient.createNote(textInput.value);
      textInput.value = '';
    });
  }
  
  displayNotes() {
    this.#removeNotes();
    
    this.notesModel.getNotes().forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.className = 'note';
      noteElement.textContent = note;
      this.mainContainer.append(noteElement);
    });
  }

  displayNotesFromApi() {
    this.notesClient.loadNotes((notes) => {
      this.notesModel.setNotes(notes);
      this.displayNotes();
    });
  }

  #removeNotes() {
    this.mainContainer.querySelectorAll('.note')
      .forEach((note) => note.remove());
  }
}

module.exports = NotesView;
