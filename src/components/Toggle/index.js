import * as s from "./styles.js";

const Toggle = ({ isOn, setIsOn, header }) => {
  return (
    <div>
      <h2>{header}</h2>
      <button
        onClick={() => {
          setIsOn((prevState) => !prevState);
        }}
      >
        {isOn ? "on" : "off"}
      </button>
    </div>
  );
};

export default Toggle;
