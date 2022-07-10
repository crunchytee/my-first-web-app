import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function deduceClassNames(checked, disabled) {
  const textColor = disabled ? "text-primary-light" : "text-primary";

  let hoverEffect;
  let focusEffect;
  let bgColor;

  if (checked) {
    hoverEffect = disabled ? "" : "hover:text-primary-dark";
    focusEffect = "focus:ring-primary-light";
    bgColor = "bg-gray-400";
  } else {
    hoverEffect = disabled ? "" : "hover:bg-gray-500";
    focusEffect = "focus:ring-gray-300";
    bgColor = disabled ? "bg-gray-300" : "bg-gray-400";
  }

  return [textColor, hoverEffect, focusEffect, bgColor];
}

function Checkbox({ checked: initialChecked, disabled, onClick, ...args }) {
  const cursor = disabled ? "cursor-not-allowed" : "";
  const [
    initialTextColor,
    initialHoverEffect,
    initialFocusEffect,
    initialBgColor,
  ] = deduceClassNames(initialChecked, disabled);

  const [checked, setChecked] = useState(initialChecked);
  const [textColor, setTextColor] = useState(initialTextColor);
  const [hoverEffect, setHoverEffect] = useState(initialHoverEffect);
  const [focusEffect, setFocusEffect] = useState(initialFocusEffect);
  const [bgColor, setBgColor] = useState(initialBgColor);

  useEffect(() => {
    const [newTextColor, newHoverEffect, newFocusEffect, newBgColor] =
      deduceClassNames(checked, disabled);

    setTextColor(newTextColor);
    setHoverEffect(newHoverEffect);
    setFocusEffect(newFocusEffect);
    setBgColor(newBgColor);
  }, [checked, disabled]);

  function completeOnClick(e) {
    setChecked(!checked);
    onClick(e);
  }

  return (
    <input
      className={`form-checkbox h-8 w-8 rounded-full ${textColor} ${hoverEffect} ${focusEffect} focus:ring-8 transition ease-in-out duration-400 ${bgColor} ${cursor}`}
      type="checkbox"
      defaultChecked={checked}
      onClick={completeOnClick}
      disabled={disabled}
      {...args}
    />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onClick: () => {},
};

export default Checkbox;
