import React from "react";

// eslint-disable-next-line react/prop-types
function DatePicker({ title, name, id, onChange }) {
  return (
    <input
      type="date"
      title={title}
      name={name}
      id={id}
      min="2019-01-15"
      max="2020-01-01"
      className="readonly"
      onChange={onChange}
    />
  );
}

export default DatePicker;
