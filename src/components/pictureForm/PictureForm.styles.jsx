import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #a9cce3;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

export const StyledWrapper = styled.div`
  flex-direction: row;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTitle = styled.h2`
  font-size: medium;
  font-weight: 600;
  color: white;
`;
