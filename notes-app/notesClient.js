class NotesClient {
  loadData(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(responseData => callback(responseData));
  }
}

module.exports = NotesClient;
