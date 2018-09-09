DROP DATABASE IF EXISTS photo_carousel;

CREATE DATABASE photo_carousel;

USE photo_carousel;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  userName tinytext NOT NULL,
  profileImageUrl mediumtext NOT NULL,
  friendsCount int NOT NULL,
  reviewsCount int NOT NULL,
  eliteStatus boolean NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE businesses (
  id int NOT NULL AUTO_INCREMENT,
  businessName tinytext NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  businessId int NOT NULL,
  imageUploaderId int NOT NULL,
  imageUrl mediumtext NOT NULL,
  imageUploadDate tinytext NOT NULL,
  imageComment mediumtext NOT NULL,
  helpfulCount int NOT NULL,
  reported boolean NOT NULL,
  FOREIGN KEY (businessId) REFERENCES businesses(id),
  FOREIGN KEY (imageUploaderId) REFERENCES users(id),
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE './csvFiles/users.csv' INTO TABLE users
FIELDS TERMINATED BY ','
IGNORE 1 LINES
(userName,profileImageUrl,friendsCount,reviewsCount,eliteStatus)
SET id = NULL;

LOAD DATA LOCAL INFILE './csvFiles/businesses.csv' INTO TABLE businesses
FIELDS TERMINATED BY ','
IGNORE 1 LINES
(businessName)
SET id = NULL;

LOAD DATA LOCAL INFILE './csvFiles/photos.csv' INTO TABLE photos
FIELDS TERMINATED BY ','
IGNORE 1 LINES
(businessId,imageUploaderId,imageUrl,imageUploadDate,imageComment,helpfulCount,reported)
SET id = NULL;