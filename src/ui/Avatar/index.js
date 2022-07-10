import React, { useState } from "react";
import PropTypes from "prop-types";

import downArrow from "./down-arrow.svg";

function Avatar({ initials, firstname, lastname, email, children }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div className="absolute flex flex-col items-end md:items-center space-y-2 w-fit-content bg-white right-24 md:right-8 top-3">
      <div className="flex flex-row items-center space-x-4">
        <div className="hidden md:inline-block bg-gray-400 p-3 w-min rounded-md">
          <div className="h-min font-bold mt-xs md:dt-xs tracking-wide">
            {initials}
          </div>
        </div>
        <div className="hidden md:inline-block">
          <div className="font-bold  mt-xs md:dt-xs tracking-wide">{`${firstname} ${lastname}`}</div>
          <div
            className="mt-xs md:dt-xs tracking-wide"
            style={{ color: "#A4ADB7" }}
          >
            {email}
          </div>
        </div>
        <button
          id="down-arrow"
          aria-label="down-arrow"
          type="button"
          onClick={() => setShowChildren(!showChildren)}
        >
          <img className="hidden md:inline-block" src={downArrow}></img>
          <div className="md:hidden bg-gray-400 p-2 md:p-4 w-min rounded-md">
            <div className="h-min font-bold mt-xs md:dt-xs tracking-wide">
              {initials}
            </div>
          </div>
        </button>
      </div>
      {showChildren && (
        <div
          className="w-full border rounded py-2 px-4"
          style={{ borderColor: "#E3E9F4" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Avatar;

Avatar.defaultProps = {
  initials: "??",
  firstname: "Anonymous",
  lastname: "Beet",
  email: "hey@beetsupply.com",
};

Avatar.propTypes = {
  /*
   * The initials of the user to render
   */
  initials: PropTypes.string,
  /*
   * The firstname of the user to render
   */
  firstname: PropTypes.string,
  /*
   * The lastname of the user to render
   */
  lastname: PropTypes.string,
  /*
   * The email of the user to render
   */
  email: PropTypes.string,
  /*
   * The links to render after clicking the down arrow button
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
