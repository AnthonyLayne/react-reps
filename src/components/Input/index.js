import { useState, useEffect } from "react";

const Input = ({
  value,
  handleOnChange,
  labelText,
  placeholder,
  name,
  required,
}) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(required && !value);
  }, [required, value]);

  if (required) console.log(name, showError);

  return (
    <label>
      {labelText}
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
    </label>
  );
};

export default Input;
