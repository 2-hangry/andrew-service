import styled from 'styled-components';

export const Banner = styled.div`
  background-color: rgba(0, 0, 0, 0.445);
  color: white;
  opacity: 0;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  width: inherit;
  height: 45px;
  transition: opacity 0.4s ease-in-out;
`;

export const Avatar = styled.img`
  width: 30px;
  border-radius: 20%;
  position: absolute;
  left: 7px;
  top: 8px;
`;

export const MediaPreview = styled.span`
  position: absolute;
  text-align: left;
  vertical-align: top;
  font-size: 11px;
  bottom: 7px;
  left: 42px;
  width: 130px;
  height: 31px;

  p {
    display: inline;
  }
`;

export const CommentPreview = styled.p`
  color: white;
  font-weight: bold;
`;

export const UserNamePreview = styled.p`
  color: rgb(211, 211, 211);
`;
