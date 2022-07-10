import React from "react";
import PropTypes from "prop-types";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";

const sizes = {
  large: "lg",
  medium: "md",
  small: "sm",
  "x-small": "xs",
};

const types = {
  display: "d",
  text: "t",
  link: "t",
};

function Typography({ children, type, size, bold, className }) {
  const letterSpacing = type === "display" ? "tracking-wider" : "tracking-wide";

  let boldness;

  if (type === "display" && bold) {
    boldness = "font-bold";
  } else if (type === "link") {
    boldness = "font-semibold";
  } else {
    boldness = "font-normal";
  }

  if (type === "display") {
    switch (size) {
      case "large":
        return (
          <h1
            className={`font-sans text-m${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} lg:text-d${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} ${className}`}
          >
            {children}
          </h1>
        );
      case "medium":
        return (
          <h2
            className={`font-sans text-m${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} lg:text-d${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} ${className}`}
          >
            {children}
          </h2>
        );
      case "small":
        return (
          <h3
            className={`font-sans text-m${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} lg:text-d${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} ${className}`}
          >
            {children}
          </h3>
        );
      default:
        return <h4>Please specify a size prop</h4>;
    }
  } else {
    return (
      <p
        className={`font-sans text-m${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} lg:text-d${types[type]}-${sizes[size]} ${letterSpacing} ${boldness} ${className}`}
      >
        {children}
      </p>
    );
  }
}

Typography.propTypes = {
  /**
   * Make the display typography to be bold
   */
  bold: PropTypes.bool,
  /**
   * The text to render as typography
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  /**
   * The type of typography to render
   */
  type: PropTypes.oneOf(Object.keys(types)),
  /**
   * The size of typography to render
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /**
   * The additional classes to render
   */
  className: PropTypes.string,
};

Typography.defaultProps = {
  bold: false,
  children: "",
  type: "text",
  size: "medium",
  className: "",
};

export default Typography;
