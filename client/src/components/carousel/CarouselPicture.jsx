import React from 'react';
import CarouselPictureBanner from './CarouselPictureBanner';
import { CarouselPhotoGrid, PictureContainer, CarouselPhoto } from './styles/carouselPictureStyles';

const CarouselPicture = ({
  photo, focusState, user, showModal,
}) => (
  <CarouselPhotoGrid>
    <PictureContainer focusState={focusState} onClick={showModal}>
      <CarouselPhoto src={photo.imageUrl} alt="business food or service" />
      <CarouselPictureBanner user={user} photo={photo} />
    </PictureContainer>
  </CarouselPhotoGrid>
);

export default CarouselPicture;
