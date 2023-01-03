class NotesView {
constructor (notesModel) {
    this.notesModel = notesModel
    this.mainContainer = document.querySelector('#main-container');
}

displayNotes() {
    this.notesModel.getNotes().forEach((note) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = note;
        this.mainContainer.append(noteElement);
    });
}
}

module.exports = NotesView;