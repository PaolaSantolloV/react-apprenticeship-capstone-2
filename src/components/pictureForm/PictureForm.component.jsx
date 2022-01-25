import React from "react";
import Button from "../button/Button.component";
import DatePicker from "../datePicker/DatePicker.component";
import {
  StyledContainer,
  StyledTitle,
  StyledWrapper,
} from "./PictureForm.styles";

// eslint-disable-next-line react/prop-types
function PictureForm({ onClick, onChange }) {
  return (
    <StyledContainer id="form" title="form">
      <StyledTitle>
        Do you want watch another picutre of the day? Please select the date
      </StyledTitle>
      <StyledWrapper title="wrapper-info">
        <DatePicker title="date" id="test" name="test" onChange={onChange} />
        <Button title="dateButton" label="Search" onClick={onClick} />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default PictureForm;
