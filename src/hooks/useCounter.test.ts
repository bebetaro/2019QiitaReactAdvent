import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("useCounterフックのテスト", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.counter).toBe(0);

  act(() => {
    result.current.incrementCounter();
  });

  expect(result.current.counter).toBe(1);

  act(() => {
    result.current.decrementCounter();
  });

  expect(result.current.counter).toBe(0);
});
