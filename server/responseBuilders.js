const db = require('../db/controllers');

const buildGetResponse = async (id) => {
  const business = db.retrieveBusiness(id);
  const photos = await db.retrievePhotos(id);

  const photoUserIds = [];

  photos.forEach((photo) => {
    photoUserIds.push(photo.imageUploaderId);
  });

  const users = db.retrieveUsers(photoUserIds);

  return {
    business: await business,
    users: await users,
    photos,
  };
};

module.exports = { buildGetResponse };
