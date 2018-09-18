import React from 'react';
import {
  ModalPictureBannerContainer,
  BrowseAll,
  Share,
  Compliment,
  ReportFlag,
  PictureCount,
} from './styles/modalPictureBannerStyles';

const ModalPictureBanner = ({
  pictureCount, pictureIdx, updateImageReported, isReported,
}) => (
  <ModalPictureBannerContainer>
    <BrowseAll className="fa fa-th-large">
      <p>Browse all</p>
    </BrowseAll>
    <PictureCount>{`${pictureIdx + 1} of ${pictureCount}`}</PictureCount>
    <Share className="fa fa-share-square-o" onClick={updateImageReported}>
      <p>Share</p>
    </Share>
    <Compliment className="fa fa-certificate">
      <p>Compliment</p>
    </Compliment>
    <ReportFlag isReported={isReported} className="fa fa-flag" onClick={updateImageReported} />
  </ModalPictureBannerContainer>
);

export default ModalPictureBanner;
