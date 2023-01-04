class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel
    this.mainContainer = document.querySelector('#main-container');
    
    const textInput = document.querySelector('#text-input');

    document.querySelector('#input-button').addEventListener('click', () => {
      notesModel.addNote(textInput.value);
      this.displayNotes();
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

  #removeNotes() {
    this.mainContainer.querySelectorAll('.note')
      .forEach((note) => note.remove());
  }
}

module.exports = NotesView;
