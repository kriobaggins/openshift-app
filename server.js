const express = require('express');
const app = express();

app.get('/' (req, res) => {
  res.send('Hello, I am meher');
});

app.get('/smc' (req, res) => {
  res.send('Hello, I am meher and this is another link');
});

app.listen(8080, () => {
  console.log('Server listening apt port 8080...');
});
