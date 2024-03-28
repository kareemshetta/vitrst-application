import { useState } from "react";

type Props = {};

const useCounter = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  const increment = (count: number) => {
    setCount((prev) => prev + 1);
  };

  const decrement = (count: number) => {
    setCount((prev) => prev - 1);
  };
  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;
