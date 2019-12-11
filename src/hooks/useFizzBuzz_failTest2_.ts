import { renderHook } from "@testing-library/react-hooks";
import { useFizzBuzz } from "./useFizzBuzz";

test("useFizzBuzz Fail Test 2", () => {
  const { result } = renderHook(() => useFizzBuzz());
  expect(result.current).toBe(0);
  jest.advanceTimersByTime(3000);
  expect(result.current).toBe("Fizz");
});
