const NotesClient = require('./NotesClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe(NotesClient, () => {

  beforeEach(() => {
    fetch.mockReset();
  });

  it('calls loadNotes which uses fetch to load data', (done) => {
    const notesClient = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify([
      'Mock note'
    ]));

    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi[0]).toBe('Mock note');
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes');

      done();
    });
  });

  it('createNote adds a note to the database', () => {
    const notesClient = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify([
      "Mock note"
    ]));

    notesClient.createNote('Mock note');

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3000/notes',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'content': 'Mock note'}),
      })
    );
  });

  it('loadNotes catches fetch error', (done) => {
    const notesClient = new NotesClient();

    fetch.mockRejectedValue('Oops, something went wrong!');

    notesClient.loadNotes(() => {}, (error) => {
      expect(error).toBe('Oops, something went wrong!');

      done();
    });
  });

  it('emojifyNote sends a fetch request to emojify text', (done) => {
    const notesClient = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      'status': 'OK',
      'text': 'Pineapple: :pineapple:',
      'emojified_text': 'Pineapple: 🍍'
    }));

    notesClient.emojifyNote('Pineapple: :pineapple:',
      (responseData) => {
        expect(responseData.emojified_text).toEqual('Pineapple: 🍍');
        expect(fetch).toHaveBeenCalledWith(
          'https://makers-emojify.herokuapp.com/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'text': 'Pineapple: :pineapple:'})
          }
        );
        done();
      }
    );
  });
});
