import React, { useState } from "react";

// Components
import Panel from "./components/Panel";
import NumberSpinner from "./components/NumberSpinner";
import Toggle from "./components/Toggle";
import Input from "./components/Input";

// Local
import logo from "./logo.svg";
import "./App.css";

const userProfile = {
  name: "Eric",
  email: "erichech@gmail.com",
  numOfChildren: 2,
  isAdmin: false,
};

// const userProfile = {
//   name: "Anthony",
//   email: "kepheus.ds@gmail.com",
//   isAdmin: false,
// }

// setNum(0); // VALID
// setNum(num + 1); // WRONG
// setNum((prevState) => prevState + 1); // VALID

function App() {
  const [isOn, setIsOn] = useState(userProfile.isAdmin);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: 24,
          }}
        >
          <Panel>
            <NumberSpinner header={text} number={5} min={1} max={10} />
          </Panel>

          <Panel>
            <Input
              labelText="Example Label"
              placeholder="Example Placeholder"
              value={text}
              handleOnChange={(e) => setText(e.target.value)}
            />
          </Panel>

          <Panel>
            <Toggle header={text} isOn={isOn} setIsOn={setIsOn} />
          </Panel>
        </div>
      </header>
    </div>
  );
}

export default App;
