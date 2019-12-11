import { useState, useEffect } from "react";
import { FizzBuzz, ColorProps } from "../type";

export const useChangeColor = (value: FizzBuzz) => {
  const [color, setColor] = useState<ColorProps>("black");

  useEffect(() => {
    if (typeof value === "number") {
      setColor("black");
    } else {
      switch (value) {
        case "Fizz":
          setColor("red");
          break;
        case "Buzz":
          setColor("blue");
          break;
        case "FizzBuzz":
          setColor("green");
          break;
        default:
          setColor("black");
      }
    }
  }, [value]);

  return color;
};
