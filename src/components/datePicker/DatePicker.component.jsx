import React from "react";
import { StyledDate } from "./DatePicket.styles";

// eslint-disable-next-line react/prop-types
function DatePicker({ title, name, id, onChange }) {
  return (
    <StyledDate
      type="date"
      title={title}
      name={name}
      id={id}
      min="2019-01-15"
      className="readonly"
      onChange={onChange}
    />
  );
}

export default DatePicker;
