const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const resBuilder = require('./responseBuilders');
const db = require('../db/index');

const port = process.env.PORT;
const DIR_PATH = path.join(__dirname, '/../public');

const app = express();

app.use('/images-service/:id', express.static(DIR_PATH));
app.use(compression());
app.use(cors());

app.get('*/:id/images/count', (req, res) => {
  db.countPhotos(req.params.id)
    .then(data => res.json(data[0]))
    .catch(err => res.send(err));
});

app.get('*/:id/images/:imgId', (req, res) => {
  resBuilder
    .buildGetResponse(req.params.id, req.params.imgId)
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
