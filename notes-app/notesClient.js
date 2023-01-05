class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(responseData => callback(responseData))
      .catch(error => errorCallback(error));
  }

  createNote(note, errorCallback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'content': note}),
    })
      .catch((error) => errorCallback(error));
  }

  emojifyNote(note, callback) {
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'text': note})
    }).then(response => response.json())
      .then(responseData => callback(responseData));
  }
}

module.exports = NotesClient;
