const faker = require('faker');
const fs = require('fs');

const makePhoto = () => (
  `${faker.random.number(100)},${faker.random.number(50)},${faker.image.food()},${faker.date.past(5)},${faker.lorem.sentence(10)},${faker.random.number(50)},false`
);

const makeUser = () => (
  `${faker.name.findName()},${faker.image.avatar()},${faker.random.number(1000)},${faker.random.number(500)},${faker.random.boolean()}`
);

const makeBusiness = () => (
  `${faker.company.companyName(0)}`
);

const makePhotos = () => {
  let photosCSV = 'businessId,imageUploaderId,imageUrl,imageUploadDate,imageComment,helpfulCount,reported\n';

  for (let i = 0; i < 1000; i += 1) {
    photosCSV += `${makePhoto()}\n`;
  }

  return photosCSV;
};
const makeUsers = () => {
  let usersCSV = 'userName,profileImageUrl,friendsCount,reviewsCount,eliteStatus\n';

  for (let i = 0; i < 50; i += 1) {
    usersCSV += `${makeUser()}\n`;
  }

  return usersCSV;
};

const makeBusinesses = () => {
  let businessesCSV = 'businessName\n';

  for (let i = 0; i < 100; i += 1) {
    businessesCSV += `${makeBusiness()}\n`;
  }

  return businessesCSV;
};

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
