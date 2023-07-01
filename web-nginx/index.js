const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!, Arafat is learning kubernetes and docker as version 2 rolls out');
});

app.get('/nginx', async (req, res) => {
  const url = 'http://nginx'
  const response = await fetch(url)
  const body = await response.text()
  res.send(body);
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});