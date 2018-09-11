const db = require('../db/index');

const buildGetResponse = async (id) => {
  const business = db.retrieveBusiness(id);
  const photos = await db.retrievePhotos(id);

  const photoUserIds = [];

  photos.forEach(photo => photoUserIds.push(photo.imageUploaderId));

  const users = await db.retrieveUsers(photoUserIds);

  return {
    business: await business,
    users,
    photos,
  };
};

module.exports = { buildGetResponse };
