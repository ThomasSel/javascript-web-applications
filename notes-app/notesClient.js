class NotesClient {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(responseData => callback(responseData));
  }

  createNote() {}
}

module.exports = NotesClient;
