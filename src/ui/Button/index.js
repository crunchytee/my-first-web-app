import React from "react";
import PropTypes from "prop-types";

function Button({
  type,
  kind,
  size,
  children,
  disabled,
  loading,
  className,
  ...args
}) {
  const sizes =
    kind === "text"
      ? {
          large: {
            minWidth: "100px",
            height: "64px",
            borderRadius: "10px",
          },
          medium: {
            minWidth: "100px",
            height: "56px",
            borderRadius: "8px",
          },
          small: {
            minWidth: "100px",
            height: "40px",
            borderRadius: "6px",
          },
        }
      : {
          large: {
            minWidth: "200px",
            height: "64px",
            borderRadius: "10px",
          },
          medium: {
            minWidth: "200px",
            height: "56px",
            borderRadius: "8px",
          },
          small: {
            minWidth: "120px",
            height: "40px",
            borderRadius: "6px",
          },
          icon: {
            minWidth: "40px",
            height: "40px",
            borderRadius: "40px",
          },
        };

  if (className.includes("w-")) {
    sizes[size]["minWidth"] = undefined;
  }

  const textSize = size === "small" ? "text-dt-xs" : "text-dt-sm";
  const cursor = disabled || loading ? "cursor-not-allowed" : "";

  let textColor;
  let bgColor;
  let border;
  let hoverEffect;
  let focusColor;
  let loaderColor;

  switch (kind) {
    case "primary":
      textColor = "text-gray-200";
      bgColor = disabled ? "bg-primary-light" : "bg-primary";
      border = "";
      hoverEffect = disabled || loading ? "" : "hover:bg-primary-dark";
      focusColor = "focus:ring-primary-light";
      loaderColor = "text-gray-200";
      break;
    case "secondary":
      textColor = disabled ? "text-primary-light" : "text-primary";
      bgColor = "";
      border = disabled
        ? "border-2 border-primary-light"
        : "border-2 border-primary";
      hoverEffect =
        disabled || loading
          ? ""
          : "hover:text-primary-dark hover:border-primary-dark";
      // TODO make sure this is correct after Ashish gets back to me
      focusColor = "focus:ring-primary-light";
      loaderColor = "text-primary";
      break;
    case "subtle":
      textColor = disabled ? "text-primary-light" : "text-primary";
      // TODO make sure this is correct for the disabled state after Ashish gets back to me
      border = disabled ? "border-2 border-gray-300" : "border-2 border-line";
      hoverEffect = disabled || loading ? "" : "hover:text-primary-dark";
      focusColor = "focus:ring-gray-300";
      loaderColor = "text-primary";
      break;
    case "text":
      textColor = disabled ? "text-primary-light" : "text-primary";
      bgColor = "focus:bg-gray-300";
      border = "";
      hoverEffect = disabled || loading ? "" : "hover:text-primary-dark";
      focusColor = "focus:ring-gray-300 ring-inset";
      loaderColor = "text-primary";
      break;
    default:
      break;
  }
  const loader =
    kind === "text" ? (
      "Loading..."
    ) : (
      <svg
        className={`animate-spin m-auto h-5 w-5 ${loaderColor}`}
        xmlns="https://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

  return (
    <button
      className={`${bgColor} ${border} ${textColor} ${textSize} tracking-wide  font-sans transition ease-in-out duration-400 group ${hoverEffect} focus:outline-none focus:ring-8 ${focusColor} ${cursor} ${className}`}
      type={type}
      style={sizes[size]}
      disabled={disabled || loading}
      {...args}
    >
      {loading ? loader : children}
    </button>
  );
}

const types = ["button", "submit", "reset"];
const kinds = ["primary", "secondary", "subtle", "text"];
const sizes = ["large", "medium", "small", "icon"];

Button.propTypes = {
  /**
   * The type of button to render which controls its behavior
   */
  type: PropTypes.oneOf(types),
  /**
   * The kind of button to render which controls its apperance
   */
  kind: PropTypes.oneOf(kinds),
  /**
   * The size of button to render
   */
  size: PropTypes.oneOf(sizes),
  /**
   * The text or icon in the button to render
   */
  children: PropTypes.string,
  /**
   * Enable the buttons disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Enable the button's loading state
   */
  loading: PropTypes.bool,
  /**
   * Extend button classes
   */
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  kind: "primary",
  size: "large",
  children: "Button",
  disabled: false,
  loading: false,
  className: "",
};

export default Button;
