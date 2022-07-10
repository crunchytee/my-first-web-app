import React from "react";
import PropTypes from "prop-types";

// TODO find file search vim plugin maybe use vfs?
function RadioButton({ checked, disabled, onClick, ...args }) {
  const cursor = disabled ? "cursor-not-allowed" : "";
  let radioButton;

  if (checked) {
    const textColor = disabled ? "text-primary-light" : "text-primary";
    const hoverEffect = disabled ? "" : "hover:text-primary-dark";

    radioButton = (
      <input
        className={`form-radio h-8 w-8 bg-gray-400 ${textColor} ${hoverEffect} focus:ring-8 focus:ring-primary-light ${cursor}`}
        type="radio"
        defaultChecked={checked}
        disabled={disabled}
        {...args}
      />
    );
  } else {
    const bgColor = disabled ? "bg-gray-300" : "bg-gray-400";
    const hoverEffect = disabled ? "" : "hover:bg-gray-500";

    radioButton = (
      <input
        className={`form-radio h-8 w-8 ${bgColor} ${hoverEffect} focus:ring-8 focus:ring-gray-300 ${cursor}`}
        type="radio"
        defaultChecked={checked}
        disabled={disabled}
        onClick={onClick}
        {...args}
      />
    );
  }

  return radioButton;
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  onClick: () => {},
};

export default RadioButton;
