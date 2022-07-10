import React from "react";
import PropTypes from "prop-types";
import "./Color.css";

function Color({ color, grayscale, gradient }) {
  const boxStyle = {
    width: "395px",
    height: "220px",
    borderRadius: "32px",
  };

  if (grayscale) {
    boxStyle.border = "1px solid #D9DBE9";
  }

  const boxClassName = gradient
    ? `bg-gradient-to-br from-${color}-start to-${color}-end`
    : `bg-${color} static`;
  const leftDropClassName = gradient
    ? `bg-${color}-start inline-block ml-10`
    : `bg-${color}-dark inline-block ml-10`;
  const rightDropClassname = gradient
    ? `bg-${color}-end inline-block ml-6`
    : `bg-${color}-light inline-block ml-6`;

  return (
    <div style={boxStyle} className={boxClassName}>
      <div className="relative top-32">
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "0px 24px 24px 24px",
          }}
          className={leftDropClassName}
        />
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "0px 24px 24px 24px",
          }}
          className={rightDropClassname}
        />
      </div>
    </div>
  );
}

Color.propTypes = {
  /*
   * The type of color
   */
  color: PropTypes.string,
  /*
   * Specify if the color is grayscale
   */
  grayscale: PropTypes.bool,
  /*
   * Make the color have a gradient
   */
  gradient: PropTypes.bool,
};

Color.defaultProps = {
  color: "primary",
  grayscale: false,
  gradient: false,
};

export default Color;
