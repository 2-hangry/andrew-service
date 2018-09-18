import React from 'react';
import classNames from 'classnames';

const ModalPictureBanner = ({
  pictureCount, pictureIdx, updateImageReported, isReported,
}) => {
  const reportFlagClass = classNames({
    'fa fa-flag': true,
    bannerItem: true,
    reported: isReported,
  });

  return (
    <div className="modalPictureBanner">
      <i id="browseAll" className="bannerItem fa fa-th-large">
        <p>Browse all</p>
      </i>
      <span className="bannerItem pictureCount">{`${pictureIdx + 1} of ${pictureCount}`}</span>
      <i id="share" className="bannerItem fa fa-share-square-o" onClick={updateImageReported}>
        <p>Share</p>
      </i>
      <i id="compliment" className="bannerItem fa fa-certificate">
        <p>Compliment</p>
      </i>
      <i id="reportFlag" className={reportFlagClass} onClick={updateImageReported} />
    </div>
  );
};

export default ModalPictureBanner;
