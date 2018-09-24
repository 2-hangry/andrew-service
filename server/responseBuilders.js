const db = require('../db/index');

const buildGetResponse = async (businessId, imageId) => {
  const business = db.retrieveBusiness(businessId);
  const photos = await db.retrievePhotos(businessId, imageId);

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
