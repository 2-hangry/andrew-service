const sql = require('mysql');

const connection = sql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mysql connection established');
  }
});

const retrieveUsers = (userIdList, cb) => {
  sql.query(`SELECT * FROM users WHERE id IN (${userIdList.join(',')})`, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(results);
    }
  });
};

const retrieveBusiness = (id, cb) => {
  sql.query(`SELECT * FROM businesses WHERE id = ${id}`, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(results);
    }
  });
};

const retrievePhotos = (businessId, cb) => {
  sql.query(`SELECT * FROM photos WHERE businessId = ${businessId}`, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(results);
    }
  });
};

const updateReported = (photoId, cb) => {
  sql.query(`UPDATE photos SET reported = 1 WHERE id = ${photoId}`, (err, res, fields) => {
    if (err) {
      cb(err);
    } else {
      cb(fields);
    }
  });
};

const updateHelpfulCount = (photoId, cb) => {
  sql.query(
    `UPDATE photos SET helpfulCount = helpfulCount + 1 WHERE id = ${photoId}`,
    (err, res, fields) => {
      if (err) {
        cb(err);
      } else {
        cb(fields);
      }
    },
  );
};

module.exports = {
  retrieveUsers,
  retrieveBusiness,
  retrievePhotos,
  updateReported,
  updateHelpfulCount,
};
