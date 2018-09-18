import React from 'react';

const ModalInfo = ({ photo, user }) => {
  const createUserNamePreview = (targetUser) => {
    const firstMiddleLast = targetUser.userName.split(' ');

    const lastInitial = firstMiddleLast[firstMiddleLast.length - 1].split('').slice(0, 1);

    return `${firstMiddleLast[0]} ${lastInitial}.`;
  };

  const eliteStatus = () => {
    if (user.eliteStatus) {
      return "Elite '18";
    }

    return null;
  };

  const formatDate = (dateObject) => {
    const dateElements = dateObject.split(' ');

    return `${dateElements[1]} ${dateElements[2]},${dateElements[3]}`;
  };

  return (
    <div className="modalInfoContainer">
      <div className="userInfo">
        <img src={user.profileImageUrl} alt="avatar" className="modalAvatar" />
        <span className="userName">{createUserNamePreview(user)}</span>
        <div className="userStats">
          <i id="friends" className="fa fa-users">
            <p>{user.friendsCount}</p>
          </i>
          <i id="reviews" className="fa fa-star">
            <p>{user.reviewsCount}</p>
          </i>
          <span className="elite">{eliteStatus()}</span>
        </div>
      </div>
      <div className="photoComment">
        <div className="comment">{photo.imageComment}</div>
        <div className="date">{formatDate(photo.imageUploadDate)}</div>
      </div>
      <div className="helpfulUi">
        <div className="helpfulPrompt">Was this photo ...?</div>
        <div className="helpfulButtonsContainer">
          <button type="button" className="helpfulButton">
            <i className="arrow fa fa-arrow-up" />
            Helpful
            <b id="helpfulCount">{photo.helpfulCount}</b>
          </button>
          <button type="button" className="helpfulButton">
            <i className="arrow fa fa-arrow-down" />
            Not Helpful
          </button>
        </div>
      </div>
      <div className="reservation">
        <i className="cal fa fa-calendar-o" />
        Make a Reservation
      </div>
    </div>
  );
};

export default ModalInfo;
