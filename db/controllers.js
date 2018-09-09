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

const retrieveUsers = (idList, cb) => {
  sql.query(`SELECT * FROM users WHERE id IN (${idList.join(',')})`, (err, results) => {
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

const updateReported = () => {
  sql.query();
};

const updateHelpfulCount = () => {
  sql.query();
};

module.exports = {
  retrieveUsers,
  retrieveBusiness,
  retrievePhotos,
  updateReported,
  updateHelpfulCount,
};
