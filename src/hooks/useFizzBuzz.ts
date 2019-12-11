import { useState, useEffect } from "react";
import { FizzBuzz } from "../type";

export const useFizzBuzz = () => {
  const [counter, setCounter] = useState<number>(0);
  const [value, setValue] = useState<FizzBuzz>(0);
  useEffect(() => {
    const timeID = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);
    return () => clearInterval(timeID);
  }, []);

  useEffect(() => {
    const newValue = fizzBuzzGenerator(counter);
    setValue(newValue);
  }, [counter]);

  return value;
};

const fizzBuzzGenerator = (args: number): FizzBuzz => {
  if (args === 0) {
    return args;
  } else if (args % 15 === 0) {
    return "FizzBuzz";
  } else if (args % 5 === 0) {
    return "Buzz";
  } else if (args % 3 === 0) {
    return "Fizz";
  } else {
    return args;
  }
};
