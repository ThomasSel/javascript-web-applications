class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(responseData => callback(responseData))
      .catch(error => errorCallback(error));
  }

  createNote(note) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'content': note}),
    });
  }
}

module.exports = NotesClient;
