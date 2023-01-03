class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.showButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.textContent = 'Thanks for clicking me!';
    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    const messageEl = document.querySelector('#message');
    messageEl.remove();
  }
}

module.exports = MessageView;