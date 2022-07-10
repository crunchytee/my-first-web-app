import { useState } from "react";
import PropTypes from "prop-types";
// TODO implement desktop accordion like on design system specifies

function Accordion({ content, children, inActiveIcon, activeIcon }) {
  const [showChildren, setShowChildren] = useState(false);

  const icon = showChildren ? activeIcon : inActiveIcon;

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="w-11/12">{content}</div>
        <button
          className="h-12 w-12 md:hidden"
          onClick={() => setShowChildren(!showChildren)}
        >
          <img src={icon} />
        </button>
      </div>
      {showChildren && (
        <div className="p-2 bg-gray-200 rounded">{children}</div>
      )}
      <div className="hidden md:block ml-12">{children}</div>
    </div>
  );
}

Accordion.propTypes = {
  content: PropTypes.element,
  children: PropTypes.element,
  inActiveIcon: PropTypes.string,
  activeIcon: PropTypes.string,
};

export default Accordion;
