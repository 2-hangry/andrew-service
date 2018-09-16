import React from 'react';

const ModalPictureContainer = ({ data }) => {
  const { photos } = data;

  return (
    <div className="modalPictureContainer">
      <img src={photos[0].imageUrl} alt="user submitted" />
    </div>
  );
};

export default ModalPictureContainer;
