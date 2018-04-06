const { pbkdf2 } = require('crypto');
const https = require('https');
const fs = require('fs');

const start = Date.now();

const getGoogle = () => {
  https.request('https://google.com', (res) => {
    let body = '';
    res.on('data', (data) => {
      body += data;
    });

    res.on('end', () => {
      console.log(`http: ${Date.now() - start}`);
    });
  }).end();
}

const getHash = () => {
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${Date.now() - start}`);
  });
}

getGoogle();

fs.readFile('multiTask.js', 'utf8', () => {
  console.log(`fs: ${Date.now() - start}`);
});

getHash();
getHash();
getHash();
getHash();
