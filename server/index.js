const express = require('express');
const bp = require('body-parser');
const db = require('../db/controllers');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/businesses/business-id/images', (req, res) => {
  res.send('GET');
});

app.post('/businesses/business-id/images', (req, res) => {
  res.send('POST');
});

app.listen(3000, () => console.log('listening on port 3000'));
