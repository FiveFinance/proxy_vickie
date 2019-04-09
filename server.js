const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/public/'));
app.use('/stocks/:stockID', express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server now listening at ${PORT}`);
});