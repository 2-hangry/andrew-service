const express = require('express');
const path = require('path');
const resBuilder = require('./responseBuilders');
const db = require('../db/index');

const port = process.env.PORT || 3000;
const DIR_PATH = path.join(__dirname, '/../public/dist');

const app = express();

app.use(express.static(DIR_PATH));

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

app.listen(port, () => console.log('listening on port 3000'));
