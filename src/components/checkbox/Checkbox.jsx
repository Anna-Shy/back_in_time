import React from "react";

import "./checkbox.scss";

export const Checkbox = ({ label, id, value, setValue }) => {
  return (
    <div className="block__checkbox">
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={(event) => {
          setValue(event.target.checked);
        }}
        className="block__checkbox-input"
      />
      <label htmlFor={id} className="block__checkbox-label">
        {label}
      </label>
    </div>
  );
};
