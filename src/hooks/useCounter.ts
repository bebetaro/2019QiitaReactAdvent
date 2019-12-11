import { useState, useCallback } from "react";

//  const {counter, incrementCounter, decrementCounter} = useCounter()
export const useCounter = () => {
  const [counter, setCount] = useState<number>(0);

  const incrementCounter = useCallback(() => setCount(counter + 1), [counter]);
  const decrementCounter = useCallback(() => setCount(counter - 1), [counter]);

  return { counter, incrementCounter, decrementCounter };
};
