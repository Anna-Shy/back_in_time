import React from "react";

import "./input.scss";

export const Input = ({
  label,
  id,
  type = "text",
  value,
  setValue,
  alert,
  error,
  hint,
  autoComplete,
  placeholder,
  required = true
}) => {
  const invalid = alert || Boolean(error);
  const note = error || hint;

  return (
    <div className="block__input">
      <label htmlFor={id} className="block__input-label">
        {label}
        {required && "*"}
      </label>
      <input
        id={id}
        className={`block__input-input ${invalid ? "input-alert" : ""}`}
        type={type}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder={placeholder || label}
        autoComplete={autoComplete}
        aria-invalid={invalid}
        aria-describedby={note ? `${id}-note` : undefined}
        required={required}
      />
      {note && (
        <p id={`${id}-note`} className={`block__input-note ${error ? "block__input-note-error" : ""}`}>
          {note}
        </p>
      )}
    </div>
  );
};
