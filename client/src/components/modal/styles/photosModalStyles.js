import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 500;
  background: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  width: 68%;
  height: 93%;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 501;
  display: grid;
  grid-template-columns: minmax(370px, 77%) minmax(250px, 23%);
  grid-template-rows: 100%;
`;
