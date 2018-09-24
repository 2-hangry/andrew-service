const sql = require('mysql');

const password = process.env.RDS_PASS;
const user = process.env.RDS_USER;

const db = sql.createConnection({
  host: 'photos-carousel.cqtnzbmw2i5p.us-east-2.rds.amazonaws.com',
  user,
  password,
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
  db.query(`SELECT businessName FROM businesses WHERE id = ${id} LIMIT 50`, (err, results) => {
    if (err) {
      rej(err);
    } else {
      res(results);
    }
  });
});

const retrievePhotos = (businessId, photoId) => new Promise((res, rej) => {
  db.query(
    `SELECT  A.* FROM  (
    (
       SELECT  *  FROM photos
       WHERE id <= ${photoId} AND businessId = ${businessId}
       ORDER BY id DESC
       LIMIT 15
    )
   UNION
    (
       SELECT * FROM photos
       WHERE id > ${photoId} AND businessId = ${businessId}
       ORDER BY id ASC
       LIMIT 15
    )
  ) as A
  ORDER BY A.id`,
    (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    },
  );
});

const countPhotos = businessId => new Promise((res, rej) => {
  db.query(
    `SELECT COUNT(*) as total FROM photos WHERE businessId = ${businessId}`,
    (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    },
  );
});

const updateReported = photoId => new Promise((res, rej) => {
  db.query(`UPDATE photos SET reported = 1 WHERE id = ${photoId}`, (err, results, fields) => {
    if (err) {
      rej(err);
    } else {
      res({
        results,
        fields,
      });
    }
  });
});

const updateHelpfulCount = photoId => new Promise((res, rej) => {
  db.query(
    `UPDATE photos SET helpfulCount = helpfulCount + 1, voted = 1 WHERE id = ${photoId}`,
    (err, results, fields) => {
      if (err) {
        rej(err);
      } else {
        res({
          results,
          fields,
        });
      }
    },
  );
});

module.exports = {
  retrieveUsers,
  retrieveBusiness,
  retrievePhotos,
  countPhotos,
  updateReported,
  updateHelpfulCount,
};
