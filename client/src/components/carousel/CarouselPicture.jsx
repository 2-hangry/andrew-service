import React from 'react';
import PropTypes from 'prop-types';
import CarouselPictureBanner from './CarouselPictureBanner';
import { PictureContainer, CarouselPhoto } from './styles/carouselPictureStyles';

const CarouselPicture = ({
  photo, focusState, user, showModal, position,
}) => (
  <div>
    <PictureContainer focusState={focusState} onClick={() => showModal(photo.id, position)}>
      <CarouselPhoto src={photo.imageUrl} alt="business food or service" />
      <CarouselPictureBanner user={user} photo={photo} />
    </PictureContainer>
  </div>
);

export default CarouselPicture;

CarouselPicture.defaultProps = {
  focusState: undefined,
};

CarouselPicture.propTypes = {
  focusState: PropTypes.bool,
  showModal: PropTypes.func.isRequired,
  photo: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  position: PropTypes.number.isRequired,
};
