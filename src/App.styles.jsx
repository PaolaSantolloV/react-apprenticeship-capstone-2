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
  font-size: x-small;
  margin-top: -8px;
  color: #5d6d7e;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #2e4053;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const StyledLogo = styled.img`
  width: 100px;
`;

export const StyledErrorImg = styled.img`
  width: 100px;
  margin-top: 10px;
`;

export const StyledError = styled.h1`
  font-size: medium;
  text-align: center;
  font-weight: 200;
  color: red;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;
