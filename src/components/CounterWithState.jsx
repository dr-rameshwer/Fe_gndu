import { useState } from "react";
function CounterWithState() {
  const [countWithState, setCountWithState] = useState(0);
  return (
    <>
      <h1>This is Counter With State</h1>
      <h2>Count is {countWithState}</h2>
      <button
        onClick={() => {
          console.log("State inc", CounterWithState);
          setCountWithState(countWithState + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default CounterWithState;
