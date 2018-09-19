import styled from 'styled-components';
import { Banner } from './carouselPictureBannerStyles';

export const PictureContainer = styled.div`
  width: 220px;
  height: 220px;
  position: relative;
  transition: transform 0.5s;
  z-index: ${props => (props.focusState ? 1 : 0)};
  transform: ${props => (props.focusState ? 'scale(1.136, 1.136)' : 'scale(1, 1)')};

  > ${Banner} {
    opacity: ${props => (props.focusState ? 1 : 0)};
  }

  &:hover {
    z-index: 1;
    transform: scale(1.136, 1.136);
    cursor: pointer;
  }

  &:hover ${Banner} {
    opacity: 1;
  }
`;

export const CarouselPhoto = styled.img`
  object-fit: cover;
  width: inherit;
  height: inherit;
`;
