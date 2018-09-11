const express = require('express');
const resBuilder = require('./responseBuilders');
const db = require('../db/controllers');

const app = express();

app.get('/businesses/:id/images', (req, res) => {
  resBuilder
    .buildGetResponse(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.post('/businesses/:id/images/helpful', (req, res) => {
  db.updateHelpfulCount(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.post('/businesses/:id/images/report', (req, res) => {
  db.updateReported(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.listen(3000, () => console.log('listening on port 3000'));
