import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Stepper({ value, setValue }) {
  //console.log("inital value", value);
  const [number, setNumber] = useState(value ? value : 0);

  useEffect(() => {
    if (number !== value) {
      setValue(number);
    }
  }, [number]);

  return (
    <div className="flex flex-row items-center border-gray-400 border">
      <button
        type="button"
        className="h-8 w-8 bg-gray-300"
        onClick={() => {
          if (number > 0) {
            setNumber(number - 1);
          }
        }}
      >
        -
      </button>
      <input
        type="text"
        name={name}
        className="w-14 h-8 p-2 text-center border-gray-400 border-l border-r border-t-0 border-b-0"
        value={number}
        onChange={(e) => {
          const value = e.target.value;
          if (parseInt(value)) {
            setNumber(parseInt(value));
          } else {
            setNumber(0);
          }
        }}
      />
      <button
        className="h-8 w-8 bg-primary text-white"
        onClick={() => {
          if (number < 1000) {
            setNumber(number + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
}

Stepper.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
};

export default Stepper;
