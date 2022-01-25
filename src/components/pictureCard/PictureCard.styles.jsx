import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const StyledWraperInfo = styled.div`
  padding: 20px;
`;

export const StyledImage = styled.img`
  width: 45%;
  border-radius: 8px;
  margin-left: 20px;

  @media (max-width: 750px) {
    width: 93%;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 544px) {
    width: 90%;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const StyledVideo = styled.iframe`
  width: 45%;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  height: 320px;

  @media (max-width: 750px) {
    width: 93%;
    margin-left: 20px;
    margin-right: 20px;
    height: 320px;
  }
  @media (max-width: 544px) {
    width: 90%;
    margin-left: 20px;
    margin-right: 20px;
    height: 320px;
  }
`;

export const StyledDescription = styled.p`
  font-size: smaller;
  text-align: justify;
  font-weight: 100;
  color: #5d6d7e;
`;

export const StyledTitlePicture = styled.h2`
  font-size: larger;
  font-weight: 500;
  color: #5d6d7e;
`;

export const StyledDate = styled.p`
  font-size: smaller;
  margin-top: -8px;
  color: #5d6d7e;
`;

export const StyledCalendar = styled.img`
  width: 18px;
`;
