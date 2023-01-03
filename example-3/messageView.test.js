/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  
  let view;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    view = new MessageView();
  });

  it('clicks the button', () => {
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Test message';
    
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toEqual('Test message');
  });

  it('removes a message', () => {
    const showMessageButtonEl = document.querySelector('#show-message-button');
    showMessageButtonEl.click();

    const hideMessageButtonEl = document.querySelector('#hide-message-button');
    hideMessageButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});