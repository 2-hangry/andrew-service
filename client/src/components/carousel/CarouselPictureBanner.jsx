import React from 'react';
import classNames from 'classnames';

const CarouselPictureBanner = ({ user, photo }) => {
  const createCommentPreview = comment => comment
    .split('')
    .slice(0, 25)
    .join('')
    .concat('...');

  const createUserNamePreview = (user) => {
    const firstMiddleLast = user.userName.split(' ');

    const lastInitial = firstMiddleLast[firstMiddleLast.length - 1].split('').slice(0, 1);

    return `${firstMiddleLast[0]} ${lastInitial}.`;
  };

  const bannerClass = classNames({
    carouselPictureBanner: true,
  });

  return (
    <div className={bannerClass}>
      <img className="avatar" src={user.profileImageUrl} alt="avatar" />
      <span className="mediaPreview">
        <p className="commentPreview">{createCommentPreview(photo.imageComment)}</p>
        <p className="userNamePreview">{`  by ${createUserNamePreview(user)}`}</p>
      </span>
    </div>
  );
};

export default CarouselPictureBanner;
