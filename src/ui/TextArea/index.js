import React from "react";
import PropTypes from "prop-types";

function TextArea({
  id,
  label,
  placeholder,
  state,
  disabled,
  caption,
  children,
  className,
  onChange,
  ...args
}) {
  const bgOpacity = disabled ? "bg-opacity-50" : "";
  const cursor = disabled ? "cursor-not-allowed" : "";
  const labelColor = disabled ? "text-gray-500" : "text-gray-700";

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

  return (
    <div className="flex flex-col">
      <label
        className={`${labelColor} font-sans tracking-wide text-dt-sm pointer-events-none`}
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className={`px-6 pt-6 pb-0 ${bgColor} focus:bg-gray-100 ${bgOpacity} rounded-lg focus:outline-none ${ring} placeholder-gray-500 text-gray-800 font-sans tracking-wide text-dt-sm ${cursor} ${className}`}
        rows="5"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        {...args}
      >
        {children}
      </textarea>
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

TextArea.defaultProps = {
  children: undefined,
};

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  state: PropTypes.string,
  disabled: PropTypes.bool,
  caption: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default TextArea;
