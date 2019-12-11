import { renderHook } from "@testing-library/react-hooks";
import { useFizzBuzz } from "./useFizzBuzz";

test("useFizzBuzz Fail Test 1", () => {
  const { result } = renderHook(() => useFizzBuzz());

  expect(result.current).toBe(0);

  setTimeout(() => {
    expect(result.current).toBe("Fizz");
  }, 3000);
});
