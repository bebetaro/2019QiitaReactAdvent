import { renderHook } from "@testing-library/react-hooks";
import { useChangeColor } from "./useChangeColor";
import { FizzBuzz } from "../type";

test("useChangeColor hooks test", () => {
  let initialValue: FizzBuzz = 0;
  const { result, rerender } = renderHook(() => useChangeColor(initialValue));
  expect(result.current).toBe("black");
  initialValue = "FizzBuzz";
  rerender();
  expect(result.current).toBe("green");
  initialValue = "Buzz";
  rerender();
  expect(result.current).toBe("blue");
  initialValue = "Fizz";
  rerender();
  expect(result.current).toBe("red");
});
