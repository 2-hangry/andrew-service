import styled from 'styled-components';

export const ModalPictureBox = styled.div`
  float: left;
  height: 100%;
  width: 77%;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background: rgba(0, 0, 0, 0.918);

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const ModalBtn = styled.button`
  position: absolute;
  z-index: 505;
  height: 30px;
  width: 30px;
  top: 50%;
  background-color: transparent;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.692);
  outline: none;
  border-width: 6px 6px 0 0;
  content: '';

  &:hover {
    border-color: rgb(255, 255, 255);
  }
`;

export const LeftModalBtn = styled(ModalBtn)`
  transform: rotate(-135deg);
  left: 2%;
  border-color: ${props => (props.pictureIdx === 0 ? 'rgba(255, 255, 255, 0.315)' : 'rgba(255, 255, 255, 0.692)')};

  &:hover {
    border-color: ${props => (props.pictureIdx === 0 ? 'rgba(255, 255, 255, 0.315)' : 'rgb(255, 255, 255)')};
  }
`;

export const RightModalBtn = styled(ModalBtn)`
  transform: rotate(45deg);
  left: 73%;
  border-color: ${props => (props.pictureIdx === props.pictureCount - 1
    ? 'rgba(255, 255, 255, 0.315)'
    : 'rgba(255, 255, 255, 0.692)')};

  &:hover {
    border-color: ${props => (props.pictureIdx === props.pictureCount - 1
    ? 'rgba(255, 255, 255, 0.315)'
    : 'rgb(255, 255, 255)')};
  }
`;
