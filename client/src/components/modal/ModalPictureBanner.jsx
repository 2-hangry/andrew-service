import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalPictureBannerContainer,
  BrowseAll,
  Share,
  Compliment,
  ReportFlag,
  PictureCount,
  MediaWrapper,
} from './styles/modalPictureBannerStyles';

const ModalPictureBanner = ({
  pictureCount, pictureIdx, updateImageReported, isReported,
}) => (
  <ModalPictureBannerContainer>
    <BrowseAll className="fa fa-th-large">
      <p>Browse all</p>
    </BrowseAll>
    <PictureCount>{`${pictureIdx + 1} of ${pictureCount}`}</PictureCount>
    <MediaWrapper>
      <Share className="fa fa-share-square-o" onClick={updateImageReported}>
        <p>Share</p>
      </Share>
      <Compliment className="fa fa-certificate">
        <p>Compliment</p>
      </Compliment>
      <ReportFlag isReported={isReported} className="fa fa-flag" onClick={updateImageReported} />
    </MediaWrapper>
  </ModalPictureBannerContainer>
);

export default ModalPictureBanner;

ModalPictureBanner.propTypes = {
  pictureCount: PropTypes.number.isRequired,
  pictureIdx: PropTypes.number.isRequired,
  isReported: PropTypes.number.isRequired,
  updateImageReported: PropTypes.func.isRequired,
};
