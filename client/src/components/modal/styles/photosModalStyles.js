import styled from 'styled-components';

export const BackDrop = styled.div`
  position: absolute;
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
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 501;
`;
