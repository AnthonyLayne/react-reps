import React from "react";

import * as s from "./styles.js";

const Panel = (props) => {
  return <s.Wrapper>{props.children}</s.Wrapper>;
};

export default Panel;

/*
Rules for React Components:

// Variables, Passing Values, "props", Parent-to-Child
  1. If you want to use a value, it either needs to be defined or passed into the component
  2. Parents pass values to their children, never the other way around
  3. To pass a value to the child, do: <Child inputHeader={"Some Header"} />
  4. To receive a value from the parent, do: const Child = ({ inputHeader }) => { return <div />; }

// Event Listeners
  5. To create an event listener in React, just add it to the element directly:
    - Like this: <button onClick={} />

// Setting State
  6. If you want the state to start out as a certain value, pass it into the `useState`:
      - Like this: const [example, setExample] = useState(initialValue)
  7. If you want to set state, you need to use one of two methods. Always first ask yourself:
    - Do I want to set the state to a specific value?
        If yes, then do: setExample(value);
    - Or do I want to change the state based on its previous value?
        If yes, then do: setExample((prevState) => { return /logic here/ })

// React Lifecycle
  8. React Lifecycle: Set State > Render > Run UseEffect
    - If the useEffect dependency has changed, run the code inside the useEffect
    - If a setState is called at any point, restart the lifecycle from the beginning
*/
