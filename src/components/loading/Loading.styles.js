import styled from "styled-components";

export const StyledLoading = styled.img`
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -125px 0 0 -125px;
  @media (max-width: 375px) {
    top: 80%;
    left: 50%;
  }
`;
