import React, { useState } from "react";
import PropTypes from "prop-types";

function Toggle({ on: initialOn, disabled, onChange }) {
  const [on, setOn] = useState(initialOn);

  const cursor = disabled ? "cursor-not-allowed" : "";
  let position;
  let bgColor;
  let hoverEffect;

  if (on) {
    position = "right-1";
    bgColor = disabled ? "bg-primary-light" : "bg-primary";
    hoverEffect = disabled ? "" : "group-hover:bg-primary-dark";
  } else {
    position = "left-1";
    bgColor = disabled ? "bg-gray-300" : "bg-gray-400";
    hoverEffect = disabled ? "" : "group-hover:bg-gray-500";
  }

  const completeOnChange = (e) => {
    onChange(e);
    setOn(!on);
  };

  // TODO do focus effect
  return (
    <label htmlFor="toggle" className="flex">
      <div className={`group relative ${cursor}`}>
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={on}
          disabled={disabled}
          onChange={completeOnChange}
        />
        <div
          className={`block ${bgColor} ${hoverEffect} transition ease-in-out duration-400 w-14 h-8 rounded-full`}
        />
        <div
          className={`absolute ${position} top-1 bg-white group-hover:bg-white w-6 h-6 rounded-full`}
        />
      </div>
    </label>
  );
}

Toggle.propTypes = {
  on: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  on: false,
  disabled: false,
  onChange: () => {},
};

export default Toggle;
