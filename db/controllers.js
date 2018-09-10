const sql = require('mysql');

const db = sql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'photo_carousel',
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mysql connection established');
  }
});

const retrieveUsers = userIdList => new Promise((res, rej) => {
  db.query(`SELECT * FROM users WHERE id IN (${userIdList.join(',')})`, (err, results) => {
    if (err) {
      rej(err);
    } else {
      res(results);
    }
  });
});

const retrieveBusiness = id => new Promise((res, rej) => {
  db.query(`SELECT businessName FROM businesses WHERE id = ${id}`, (err, results) => {
    if (err) {
      rej(err);
    } else {
      res(results);
    }
  });
});

const retrievePhotos = businessId => new Promise((res, rej) => {
  db.query(`SELECT * FROM photos WHERE businessId = ${businessId}`, (err, results) => {
    if (err) {
      rej(err);
    } else {
      res(results);
    }
  });
});

const updateReported = photoId => new Promise((res, rej) => {
  db.query(`UPDATE photos SET reported = 1 WHERE id = ${photoId}`, (err, results, fields) => {
    if (err) {
      rej(err);
    } else {
      res(fields);
    }
  });
});

const updateHelpfulCount = photoId => new Promise((res, rej) => {
  db.query(
    `UPDATE photos SET helpfulCount = helpfulCount + 1 WHERE id = ${photoId}`,
    (err, results, fields) => {
      if (err) {
        rej(err);
      } else {
        res(fields);
      }
    },
  );
});

module.exports = {
  retrieveUsers,
  retrieveBusiness,
  retrievePhotos,
  updateReported,
  updateHelpfulCount,
};
