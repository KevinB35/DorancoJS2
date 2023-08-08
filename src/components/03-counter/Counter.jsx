import React, { useState, useRef } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const timer = useRef(null);

  const handleStartCounter = () => {
    timer.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  };

  const handleStopCounter = () => {
    clearInterval(timer.current);
  };

  const handleResetCounter = () => {
    setCounter(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TP Counter</h1>
      <div>Counter: {counter}</div>
      <div style={{ paddingTop: 15 }}>
        <button onClick={handleStartCounter}>Start</button>
        <button onClick={handleStopCounter}>Stop</button>
        <button onClick={handleResetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
