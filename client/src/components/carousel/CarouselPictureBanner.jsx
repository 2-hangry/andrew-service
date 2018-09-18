import React from 'react';
import PropTypes from 'prop-types';
import {
  Banner,
  Avatar,
  MediaPreview,
  CommentPreview,
  UserNamePreview,
} from './styles/carouselPictureBannerStyles';

const CarouselPictureBanner = ({ user, photo }) => {
  const createCommentPreview = comment => comment
    .split('')
    .slice(0, 25)
    .join('')
    .concat('...');

  const createUserNamePreview = (targetUser) => {
    const firstMiddleLast = targetUser.userName.split(' ');
    const lastInitial = firstMiddleLast[firstMiddleLast.length - 1].split('').slice(0, 1);
    return `${firstMiddleLast[0]} ${lastInitial}.`;
  };

  return (
    <Banner>
      <Avatar src={user.profileImageUrl} alt="avatar" />
      <MediaPreview>
        <CommentPreview>{createCommentPreview(photo.imageComment)}</CommentPreview>
        <UserNamePreview>{`  by ${createUserNamePreview(user)}`}</UserNamePreview>
      </MediaPreview>
    </Banner>
  );
};

export default CarouselPictureBanner;

CarouselPictureBanner.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};
