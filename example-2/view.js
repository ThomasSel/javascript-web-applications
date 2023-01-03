class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This paragraph has been dynamically added by javascript';
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph) => paragraph.remove());
  }
}

module.exports = View;