const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/public/'));

// Set up API routes to various modules


app.listen(PORT, () => {
  console.log(`Server now listening at ${PORT}`);
});