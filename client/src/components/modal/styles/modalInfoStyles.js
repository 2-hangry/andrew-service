import styled from 'styled-components';

export const ModalInfoContainer = styled.div`
  position: relative;
  float: left;
  height: 100%;
  width: 23%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background: white;
`;

export const UserInfo = styled.div`
  position: relative;
  height: 40px;
  margin: 20px 0px 10px 0px;
`;

export const Avatar = styled.img`
  float: left;
  vertical-align: top;
  width: 35px;
  border-radius: 20%;
  margin: 0px 15px;
`;

export const UserName = styled.span`
  vertical-align: top;
  font-weight: bold;
  color: rgb(0, 136, 226);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const UserStats = styled.div`
  position: relative;
  height: 20px;
  margin-top: 5px;
`;

export const Friends = styled.i`
  float: left;
  font-size: 14px;
  color: rgb(255, 102, 0);

  p {
    display: inline;
    position: relative;
    left: 5px;
    color: rgb(90, 90, 90);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Reviews = styled.i`
  float: left;
  margin-left: 20px;
  font-size: 14px;
  color: rgb(255, 102, 0);

  p {
    display: inline;
    position: relative;
    left: 5px;
    color: rgb(90, 90, 90);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Elite = styled.span`
  display: inline-block;
  float: left;
  margin-left: 15px;
  font-size: 13px;
  font-weight: bold;
  color: rgb(255, 102, 0);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const PhotoComment = styled.div`
  width: 90%;
  margin: 0px 15px;
`;

export const Comment = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: rgb(63, 63, 63);
`;

export const Date = styled.div`
  font-size: 12px;
  color: rgb(151, 151, 151);
`;

export const HelpfulUi = styled.div`
  margin: 15px 15px;
`;

export const HelpfulPrompt = styled.div`
  color: rgb(90, 90, 90);
  font-size: 12px;
  font-weight: bold;
`;

export const HelpfulButtonsContainer = styled.div`
  margin-top: 8px;
`;

export const HelpfulButton = styled.button`
  margin-right: 3px;
  height: 30px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(90, 90, 90);
  border-radius: 4px;
  outline: none;
  padding: 0px 11px;

  &:hover {
    cursor: pointer;
  }
`;

export const HelpfulCount = styled.b`
  font-weight: 300;
  margin-left: 4px;
`;

export const Arrow = styled.i`
  margin-right: 5px;
`;

export const Cal = styled.i`
  margin-right: 10px;
`;

export const Reservation = styled.div`
  margin-left: 15px;
  color: rgb(0, 136, 226);
  font-size: 15px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
