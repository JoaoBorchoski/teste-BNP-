import { useState, useEffect } from "react";

type CounterProps = {
  initialCount: number;
  setCountCiclo: (count: number) => void;
};

export const Counter: React.FC<CounterProps> = ({
  initialCount,
  setCountCiclo,
}) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const event = new CustomEvent("onCounterMount");
    window.dispatchEvent(event);

    return () => {
      const event = new CustomEvent("onCounterUnmount");
      window.dispatchEvent(event);
    };
  }, []);

  useEffect(() => {
    const event = new CustomEvent("onCounterUpdate", { detail: count });
    window.dispatchEvent(event);
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCountCiclo(count + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
