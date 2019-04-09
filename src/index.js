// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render();



import axios from 'axios';

const stockID = window.location.pathname.split('/')[2];

axios.get(`localhost:3001/api/ratings/${stockID}`)
  .then(res => res.data)
  .then(result => {
    res.send(result);
  });
 
axios.get(`localhost:3001/api/history/${stockID}`)
  .then(res => res.data)
  .then(result => {
  res.send(result);
});

axios.get(`localhost:3002/api/stock/${stockID}`)
  .then(res => res.data)
  .then(result => {
  res.send(result);
});

axios.get(`localhost:3002/api/accounts/${stockID}`)
  .then(res => res.data)
  .then(result => {
  res.send(result);
});

//  TODO: charts
//  TODO: aboutinfo