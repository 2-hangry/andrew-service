const express = require('express');
const bp = require('body-parser');
const resBuilder = require('./responseBuilders');
const db = require('../db/controllers');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/businesses/business-id/images', (req, res) => {
  resBuilder
    .buildGetResponse(req.query.id)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.post('/businesses/business-id/images', (req, res) => {
  if (req.body.type === 'helpful') {
    db.updateHelpfulCount(req.body.id)
      .then(data => res.json(data))
      .catch(err => res.send(err));
  } else if (req.body.type === 'report') {
    db.updateReported(req.body.id)
      .then(data => res.json(data))
      .catch(err => res.send(err));
  } else {
    res.end('Invalid request type');
  }
});

app.listen(3000, () => console.log('listening on port 3000'));
