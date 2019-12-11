import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzz } from "./useFizzBuzz";

test("useFizzBuzz Hooks Test", async () => {
  const { result } = renderHook(() => useFizzBuzz());

  expect(result.current).toBe(0);

  act(() => {
    jest.advanceTimersByTime(3000);
  });

  expect(result.current).toBe("Fizz");

  act(() => {
    jest.advanceTimersByTime(2000);
  });
  expect(result.current).toBe("Buzz");

  act(() => {
    jest.advanceTimersByTime(10_000);
  });
  expect(result.current).toBe("FizzBuzz");

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(result.current).toBe(16);
});
