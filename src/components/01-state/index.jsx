import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
    </div>
  );
};

export default State;
