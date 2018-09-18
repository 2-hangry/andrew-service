import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalInfoContainer,
  UserInfo,
  Avatar,
  UserName,
  UserStats,
  Friends,
  Reviews,
  Elite,
  PhotoComment,
  Comment,
  Date,
  HelpfulUi,
  HelpfulPrompt,
  HelpfulButtonsContainer,
  HelpfulButton,
  Reservation,
  Arrow,
  Cal,
  HelpfulCount,
} from './styles/modalInfoStyles';

const ModalInfo = ({ photo, user }) => {
  const createUserNamePreview = (targetUser) => {
    const firstMiddleLast = targetUser.userName.split(' ');
    const lastInitial = firstMiddleLast[firstMiddleLast.length - 1].split('').slice(0, 1);
    return `${firstMiddleLast[0]} ${lastInitial}.`;
  };

  const formatDate = (dateObject) => {
    const dateElements = dateObject.split(' ');
    return `${dateElements[1]} ${dateElements[2]},${dateElements[3]}`;
  };

  const eliteStatus = () => {
    if (user.eliteStatus) {
      return "Elite '18";
    }
    return null;
  };

  return (
    <ModalInfoContainer>
      <UserInfo>
        <Avatar src={user.profileImageUrl} alt="avatar" />
        <UserName>{createUserNamePreview(user)}</UserName>
        <UserStats>
          <Friends className="fa fa-users">
            <p>{user.friendsCount}</p>
          </Friends>
          <Reviews className="fa fa-star">
            <p>{user.reviewsCount}</p>
          </Reviews>
          <Elite>{eliteStatus()}</Elite>
        </UserStats>
      </UserInfo>
      <PhotoComment>
        <Comment>{photo.imageComment}</Comment>
        <Date>{formatDate(photo.imageUploadDate)}</Date>
      </PhotoComment>
      <HelpfulUi>
        <HelpfulPrompt>Was this photo ...?</HelpfulPrompt>
        <HelpfulButtonsContainer>
          <HelpfulButton type="button">
            <Arrow className="fa fa-arrow-up" />
            Helpful
            <HelpfulCount>{photo.helpfulCount}</HelpfulCount>
          </HelpfulButton>
          <HelpfulButton type="button">
            <Arrow className="fa fa-arrow-down" />
            Not Helpful
          </HelpfulButton>
        </HelpfulButtonsContainer>
      </HelpfulUi>
      <Reservation>
        <Cal className="fa fa-calendar-o" />
        Make a Reservation
      </Reservation>
    </ModalInfoContainer>
  );
};

export default ModalInfo;

ModalInfo.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};
