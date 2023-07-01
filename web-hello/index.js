const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!, Arafat is learning kubernetes and docker as version 2 rolls out');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});