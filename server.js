const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/public/'));
app.use('/stocks/:stockID', express.static(__dirname + '/public/'));

const axios3001 = axios.create({
  baseURL: 'localhost:3001', 
  timeout: 3000,
})
const axios3002 = axios.create({
  baseURL: 'localhost:3002', 
  timeout: 3000,
})
const axios3003 = axios.create({
  baseURL: 'localhost:3003', 
  timeout: 3000,
})
const axios3004 = axios.create({
  baseURL: 'localhost:3004', 
  timeout: 3000,
})

app.use('/api/ratings/:stockID', (req, res) => {
  axios3001.get(`/api/ratings/${req.params.stockID}`)
    .then(result => res.send(result.data))
    .catch(err => res.send(err));
});

app.use('/api/history/:stockID', (req, res) => {
  axios3001.get(`/api/history/${req.params.stockID}`)
    .then(result => res.send(result.data))
    .catch(err => res.send(err));
});

app.use('/api/stocks/:ticker', (req, res) => {
  axios3002.get(`/api/stocks/${req.params.ticker}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
})

app.use('/api/accounts/:account_number', (req, res) => {
  axios3002.get(`/api/accounts/${req.params.account_number}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
})

app.use('/api/quotes/:symbol', (req, res) => {
  axios3003.get(`/api/quotes/${req.params.symbol}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
})

app.use('/stocks/tags/:tag', (req, res) => {
  axios3003.get(`/stocks/tags/${req.params.tag}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
})

app.listen(PORT, () => {
  console.log(`Server now listening at: http://localhost:${PORT}`);
});