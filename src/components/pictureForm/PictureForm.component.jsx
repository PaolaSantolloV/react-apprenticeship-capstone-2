import React from "react";
import Button from "../button/Button.component";
import DatePicker from "../datePicker/DatePicker.component";

// eslint-disable-next-line react/prop-types
function PictureForm({ onClick, onChange }) {
  return (
    <div id="form" title="form">
      <h2>
        Do you want watch another picutre of the day? Please select the date
      </h2>
      <DatePicker title="date" id="test" name="test" onChange={onChange} />
      <Button title="dateButton" label="oli" onClick={onClick} />
    </div>
  );
}

export default PictureForm;
