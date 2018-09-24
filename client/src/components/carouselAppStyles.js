import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const PhotosPreLoader = styled.div`
  width: 0px;
  height: 0px;
  display: none;

  img {
    display: none;
  }
`;

export { AppWrapper, PhotosPreLoader };
