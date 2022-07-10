/* eslint-env browser */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Modal({
  isOpen,
  closeModal,
  children,
  containerId,
  fullScreenMobile,
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const mobileHeight = fullScreenMobile ? "h-full" : "h-1/2";
  const roundedBorder = fullScreenMobile
    ? "rounded-none"
    : "rounded-t-3xl rounded-b-none";
  const modalContent = isOpen ? (
    <>
      <div
        className="z-20 fixed top-0	left-0 w-full h-full bg-gray-800 bg-opacity-40"
        id="modal-overlay"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div
        className={`z-20 fixed ${roundedBorder} md:rounded-3xl bg-white bottom-0 md:top-1/2 md:left-1/2 w-full md:w-1/2 ${mobileHeight} md:h-2/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}
      >
        <button
          className="absolute top-6 right-6 w-6"
          type="button"
          onClick={closeModal}
        >
          ✕
        </button>
        <div className="relative top-1/2 transform -translate-y-1/2">
          {children}
        </div>
      </div>
    </>
  ) : undefined;

  let portal;
  if (isBrowser) {
    const container = containerId
      ? document.getElementById(containerId)
      : document.getElementById("root");
    portal = ReactDOM.createPortal(modalContent, container);
  } else {
    // I need to return null because undefined isn't a valid return value for a react component
    portal = null;
  }

  return portal;
}

Modal.defaultProps = {
  isOpen: false,
  closeModal: () => {},
  children: undefined,
  containerId: undefined,
  fullScreenMobile: false,
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.element,
  containerId: PropTypes.string,
  fullScreenMobile: PropTypes.bool,
};

export default Modal;
