const express = require('express');
const path = require('path');
const cors = require('cors');
const resBuilder = require('./responseBuilders');
const db = require('../db/index');

const port = process.env.PORT || 3000;
const DIR_PATH = path.join(__dirname, '/../public');

const app = express();

app.use('/images-service/:id', express.static(DIR_PATH));
app.use(cors());

app.get('*/:id/images', (req, res) => {
  resBuilder
    .buildGetResponse(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.post('*/:id/images/:imgId/helpful', (req, res) => {
  db.updateHelpfulCount(req.params.imgId)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.post('*/:id/images/:imgId/report', (req, res) => {
  db.updateReported(req.params.imgId)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.listen(port, () => console.log(`listening on port ${port}`));
