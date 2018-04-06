const https = require('https');

const start = Date.now();

const getGoogle = () => {
  https.request('https://google.com', (res) => {
    let body = '';
    res.on('data', (data) => {
      body += data;
    });

    res.on('end', () => {
      console.log(Date.now() - start);
    });
  }).end();
}

getGoogle();
getGoogle();
getGoogle();
getGoogle();
getGoogle();
