import React from "react";
import { StyledButton } from "./Button.styles";

// eslint-disable-next-line react/prop-types
function Button({ title, label, onClick }) {
  return (
    <StyledButton title={title} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;
