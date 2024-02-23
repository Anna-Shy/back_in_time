import React from "react";

import "./input.scss";

export const Input = ({ label, id, type, value, setValue }) => {
  return (
    <div className="block__input">
      <label htmlFor={id} className="block__input-label">
        {label}*
      </label>
      <input
        id={id}
        className="block__input-input"
        type={type}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder={label}
        required
      />
    </div>
  );
};
