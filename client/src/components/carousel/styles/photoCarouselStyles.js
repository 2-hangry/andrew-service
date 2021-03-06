import styled from 'styled-components';

export const PhotoCarouselBox = styled.div`
  width: 660px;
  height: 220px;
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;

  button {
    position: absolute;
    vertical-align: top;
    z-index: 2;
    height: 30px;
    width: 30px;
    top: 110px;
    background-color: transparent;
    border-style: solid;
    outline: none;
    border-width: 6px 6px 0 0;
    content: '';
  }
`;

export const CarouselPhotos = styled.div`
  display: grid;
  grid-template-columns: 220px 220px 220px;
  grid-template-rows: auto;
`;

export const LeftCarouselBtn = styled.button`
  transition: transform 0.15s;
  transform: rotate(-135deg);
  left: -40px;
  border-color: ${props => (props.pictureIdx === 0 ? 'rgba(255, 255, 255, 0.315)' : 'rgba(255, 255, 255, 0.692)')};

  &:hover {
    border-color: ${props => (props.pictureIdx === 0 ? 'rgba(255, 255, 255, 0.315)' : 'rgb(255, 255, 255)')};
    cursor: ${props => (props.pictureIdx === 0 ? 'default' : 'pointer')};
  }

  ${PhotoCarouselBox}:hover > & {
    transform: translate(70px, 0px) rotate(-135deg);
  }
`;

export const RightCarouselBtn = styled.button`
  transition: transform 0.15s;
  transform: rotate(45deg);
  right: -40px;
  border-color: ${props => (props.pictureIdx + 2 === props.listSize
    ? 'rgba(255, 255, 255, 0.315)'
    : 'rgba(255, 255, 255, 0.692)')};

  ${PhotoCarouselBox}:hover > & {
    transform: translate(-70px, 0px) rotate(45deg);
  }

  &:hover {
    border-color: ${props => (props.pictureIdx + 2 === props.listSize
    ? 'rgba(255, 255, 255, 0.315)'
    : 'rgb(255, 255, 255)')};
    cursor: ${props => (props.pictureIdx === props.listSize ? 'default' : 'pointer')};
  }
`;
