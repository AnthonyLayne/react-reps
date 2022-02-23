import React, { useState } from "react";

import * as s from "./styles.js";

const NumberSpinner = ({ number, min, max, header }) => {
  const [num, setNum] = useState(number);

  // setNum(0); // VALID
  // setNum(num + 1); // WRONG
  // setNum((prevState) => prevState + 1); // VALID

  return (
    <div>
      <h2>{header}</h2>
      <button
        onClick={() =>
          setNum((prevState) => {
            const potentialFutureState = prevState - 1;

            return min !== undefined && potentialFutureState < min
              ? prevState
              : potentialFutureState;
          })
        }
      >
        -
      </button>
      <span>{num}</span>
      <button
        onClick={() =>
          setNum((prev) => {
            const potentialResult = prev + 1;
            if (max !== undefined && potentialResult > max) return prev;
            return potentialResult;
          })
        }
      >
        +
      </button>
    </div>
  );
};

export default NumberSpinner;
