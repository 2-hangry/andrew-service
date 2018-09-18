import styled from 'styled-components';

export const ModalPictureBannerContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 77%;
  height: 30px;
  background: rgba(0, 0, 0, 0.603);
  color: grey;
`;

const BannerItem = styled.i`
  position: absolute;
  background: transparent;
  top: 20%;
  border: transparent;
  color: rgba(255, 255, 255, 0.692);

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

export const BrowseAll = styled(BannerItem)`
  left: 0.5%;

  p {
    display: inline;
    position: relative;
    left: 5px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Share = styled(BannerItem)`
  right: 15%;

  p {
    display: inline;
    position: relative;
    left: 5px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Compliment = styled(BannerItem)`
  right: 5%;

  p {
    display: inline;
    position: relative;
    left: 5px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const ReportFlag = styled(BannerItem)`
  right: 1%;
  font-size: 15px;
  color: ${props => (props.isReported ? 'red' : 'rgba(255, 255, 255, 0.692)')};

  &:hover {
    ${props => (props.isReported ? 'red' : 'rgb(255, 255, 255)')};
  }
`;

export const PictureCount = styled(BannerItem)`
  color: rgba(255, 255, 255, 0.692);
  font-size: 11px;
  left: 48%;

  &:hover {
    color: rgba(255, 255, 255, 0.692);
  }
`;
