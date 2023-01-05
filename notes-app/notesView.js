class NotesView {
  constructor(notesModel, notesClient) {
    this.notesModel = notesModel;
    this.notesClient = notesClient;
    this.mainContainer = document.querySelector('#main-container');
    
    const textInput = document.querySelector('#text-input');

    document.querySelector('#input-button').addEventListener('click', () => {
      this.notesClient.emojifyNote(textInput.value, (responseData) => {
        notesModel.addNote(responseData.emojified_text);
        this.displayNotes();
        notesClient.createNote(responseData.emojified_text, (error) => {
          this.displayError(error);
        });
      })
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
    }, (error) => {
      this.displayError(error);
    });
  }

  displayError(error) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = error;
    this.mainContainer.append(errorElement);
  }

  #removeNotes() {
    this.mainContainer.querySelectorAll('.note')
      .forEach((note) => note.remove());
  }
}

module.exports = NotesView;
