import styled from 'styled-components';

export const ModalPictureBannerContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0.603);
  color: grey;
  display: flex;
  align-items: center;
  align-content: center;
`;

const BannerItem = styled.i`
  background: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 0.692);

  &:hover {
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export const BrowseAll = styled(BannerItem)`
  flex: 1;
  justify-self: flex-start;
  align-self: center;
  padding-left: 10px;

  p {
    display: inline;
    margin-left: 5px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const MediaWrapper = styled.div`
  flex: 1;
  justify-self: flex-end;
  align-self: center;
  display: flex;
  justify-content: flex-end;
`;

export const Share = styled(BannerItem)`
  padding-right: 10px;

  p {
    display: inline;
    left: 5px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Compliment = styled(BannerItem)`
  p {
    display: inline;
    left: 7px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const ReportFlag = styled(BannerItem)`
  font-size: 15px;
  margin: 0px 10px;
  color: ${props => (props.isReported ? 'red' : 'rgba(255, 255, 255, 0.692)')};

  &:hover {
    ${props => (props.isReported ? 'red' : 'rgb(255, 255, 255)')};
  }
`;

export const PictureCount = styled(BannerItem)`
  flex: 1;
  align-self: center;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.692);
  font-size: 11px;

  &:hover {
    color: rgba(255, 255, 255, 0.692);
    cursor: default;
  }
`;
