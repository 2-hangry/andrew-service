const express = require('express');
const bp = require('body-parser');
const resBuilder = require('./responseBuilders');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/businesses/business-id/images', (req, res) => {
  resBuilder
    .buildGetResponse(req.query.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/businesses/business-id/images', (req, res) => {
  res.end('POST');
});

app.listen(3000, () => console.log('listening on port 3000'));
