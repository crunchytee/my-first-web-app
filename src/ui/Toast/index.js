import React from "react";
import PropTypes from "prop-types";

// TODO consider making the whole toast smaller like 64 or 48 px

function deduceColor(appearance) {
  switch (appearance) {
    case "error":
      return "bg-error";
    case "success":
      return "bg-primary";
    case "info":
      return "bg-secondary";
    default:
      return "";
  }
}

function Toast({ appearance, children, autoDismiss, onDismiss }) {
  const bgColor = deduceColor(appearance);

  return (
    <div
      className={`${bgColor} font-sans tracking-wide text-dt-sm semi-bold text-gray-100 flex items-center w-full`}
      style={{ height: "72px" }}
    >
      <div className="m-auto">{children}</div>
      {!autoDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="mx-2 lg:mx-3 text-gray-100 w-6 focus:outline-none focus:outline-gray-100"
        >
          ✕
        </button>
      )}
    </div>
  );
}

const appearances = ["error", "success", "info"];

Toast.propTypes = {
  appearance: PropTypes.oneOf(appearances),
  children: PropTypes.string,
  autoDismiss: PropTypes.bool,
  onDismiss: PropTypes.func,
};

Toast.defaultProps = {
  appearance: "info",
  children: "A message",
  autoDismiss: true,
  onDismiss: () => {},
};
export default Toast;
