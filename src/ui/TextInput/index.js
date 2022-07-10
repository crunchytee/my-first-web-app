import React from "react";
import PropTypes from "prop-types";
import Input from "react-phone-number-input/input";

function TextInput({
  type,
  size,
  icon,
  name,
  label,
  placeholder,
  value,
  disabled,
  caption,
  state,
  unsetWidth,
  rounded,
  className,
  onChange,
  ...args
}) {
  let dimensions;
  let iconPosition;
  const minWidth = className.includes("w-") || unsetWidth ? undefined : "325px";
  if (size === "large") {
    dimensions = {
      minWidth: minWidth,
      minHeight: "64px",
    };
    iconPosition = "top-5";
  } else {
    dimensions = {
      minWidth: minWidth,
      minHeight: "56px",
    };
    iconPosition = "top-4";
  }

  let bgColor;
  let ring;
  let captionColor;

  switch (state) {
    case "success":
      bgColor = "bg-primary-light bg-opacity-10";
      // TODO ask Ashish about making this primary-dark instead
      ring = "ring-2 ring-primary";
      captionColor = "text-primary-dark";
      break;
    case "error":
      bgColor = "bg-error-light";
      // TODO ask Ashish about making the placeholder text visible anyway
      ring = "ring-2 ring-error";
      captionColor = "text-error-dark";
      break;
    default:
      bgColor = "bg-gray-300";
      ring = "focus:ring-2 focus:ring-gray-800";
      captionColor = "text-gray-600";
      break;
  }

  const bgOpacity = disabled ? "bg-opacity-50" : "";
  const cursor = disabled ? "cursor-not-allowed" : "";
  const labelColor = disabled ? "text-gray-500" : "text-gray-700";
  const iconColor = disabled ? "text-gray-500" : "text-gray-800";

  let roundBorders;

  if (rounded === "normal") {
    roundBorders = "rounded-lg";
  } else if (rounded === "extra") {
    roundBorders = "rounded-3xl";
  } else {
    roundBorders = "";
  }

  const xPadding = icon ? "pl-16 pr-6" : "pl-6 pr-6";

  const id = label
    ? [...label.toLowerCase().split(" "), "input"].join("-")
    : "input";

  return (
    <div>
      {label && (
        <label
          className={`${labelColor} font-sans tracking-wide text-dt-sm pointer-events-none`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="my-2 relative">
        {type === "tel" ? (
          <Input
            className={`${xPadding} ${bgColor} focus:bg-gray-100 ${bgOpacity} ${roundBorders} focus:outline-none ${ring} placeholder-gray-500 text-gray-800 font-sans tracking-wide text-dt-sm ${cursor} ${className}`}
            country="US"
            style={dimensions}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...args}
          />
        ) : (
          <input
            className={`${xPadding} ${bgColor} focus:bg-gray-100 ${bgOpacity} ${roundBorders} focus:outline-none ${ring} placeholder-gray-500 text-gray-800 font-sans tracking-wide text-dt-sm ${cursor} ${className}`}
            style={dimensions}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={value}
            disabled={disabled}
            onChange={onChange}
            {...args}
          />
        )}
        {icon && (
          <span className={`absolute left-6 ${iconPosition} ${iconColor}`}>
            {icon}
          </span>
        )}
      </div>
      {caption && (
        <p
          className={`my-2 tracking-wide text-dt-xs font-sans ${captionColor}`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

export default TextInput;

const types = ["text", "tel", "password"];
const sizes = ["large", "small"];
const states = ["success", "error", undefined];

TextInput.propTypes = {
  /**
   * The name of text input to render
   */
  name: PropTypes.string,
  /**
   * The type of text input to render
   */
  type: PropTypes.oneOf(types),
  /**
   * The size of text input to render
   */
  size: PropTypes.oneOf(sizes),
  /**
   * The svg icon for the text input to render
   */
  icon: PropTypes.element,
  /**
   * The label for the text input to render
   */
  label: PropTypes.string,
  /**
   * The placeholder for the text input to render
   */
  placeholder: PropTypes.string,
  /**
   * The value for the text input to render
   */
  value: PropTypes.string,
  /**
   * Enable the text input's disabled state
   */
  disabled: PropTypes.bool,
  /**
   * The caption for the button
   */
  caption: PropTypes.string,
  /**
   * The state of the text input to render
   */
  state: PropTypes.oneOf(states),
  /**
   * Not set the width for the text input
   */
  unsetWidth: PropTypes.bool,
  /**
   * Set the roundness of the input field's corners
   */
  rounded: PropTypes.oneOf(["none", "normal", "extra"]),
  /**
   * The additional classes for the text input to render
   */
  className: PropTypes.string,
  /**
   * The onChange function
   */
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  name: "",
  type: "text",
  size: "large",
  icon: undefined,
  label: undefined,
  placeholder: "Placeholder",
  value: "",
  disabled: false,
  caption: "",
  state: undefined,
  unsetWidth: false,
  rounded: "normal",
  className: "",
};
