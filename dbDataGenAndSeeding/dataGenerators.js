const faker = require('faker');
const fs = require('fs');

// <------------------------ CSV text generating script for photo table ------------------->

const makePhoto = () => (
  `${faker.random.number(100)},${faker.random.number(50)},${faker.image.food()},${faker.date.past(5)},${faker.lorem.sentence(10)},${faker.random.number(50)},false`
);

const makePhotos = () => {
  let photosCSV = 'businessId,imageUploaderId,imageUrl,imageUploadDate,imageComment,helpfulCount,reported\n';
  const photos = [];

  for (let i = 0; i < 1000; i += 1) {
    photos.push(makePhoto());
  }
  photosCSV += photos.join('\n');

  return photosCSV;
};

// <------------------------ CSV text generating script for user table ------------------->

const makeUser = () => (
  `${faker.name.findName()},${faker.image.avatar()},${faker.random.number(1000)},${faker.random.number(500)},${faker.random.number(1)}`
);

const makeUsers = () => {
  let usersCSV = 'userName,profileImageUrl,friendsCount,reviewsCount,eliteStatus\n';
  const users = [];

  for (let i = 0; i < 50; i += 1) {
    users.push(makeUser());
  }
  usersCSV += users.join('\n');

  return usersCSV;
};

// <------------------------ CSV text generating script for business table ------------------->

const makeBusiness = () => (
  `${faker.company.companyName(0)}`
);

const makeBusinesses = () => {
  let businessesCSV = 'businessName\n';
  const businesses = [];

  for (let i = 0; i < 100; i += 1) {
    businesses.push(makeBusiness());
  }
  businessesCSV += businesses.join('\n');

  return businessesCSV;
};

// <------------------------ file writing scripts ------------------->

const photos = makePhotos();
const users = makeUsers();
const businesses = makeBusinesses();

fs.writeFile('./dbDataGenAndSeeding/csvFiles/photos.csv', photos, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});

fs.writeFile('./dbDataGenAndSeeding/csvFiles/users.csv', users, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});

fs.writeFile('./dbDataGenAndSeeding/csvFiles/businesses.csv', businesses, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});
