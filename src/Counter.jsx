import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <p>{count}</p>
      <button className="decrease" onClick={handleDecrease}>
        Decrement
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <button className="increase" onClick={handleIncrease}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
