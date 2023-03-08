import client from '../utils/client';

const endpoint = client.databaseURL;

// FIXME:  GET ALL AUTHORS
const getLangs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Languages.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleLang = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Languages/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getLangVocabs = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocabs.json?orderBy="language_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getLangs,
  getSingleLang,
  getLangVocabs,
};
