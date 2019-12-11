import { useCounter } from "./useCounter";

test("useCounter Failed test", () => {
  const { counter, incrementCounter, decrementCounter } = useCounter();

  expect(counter).toBe(0);

  incrementCounter();

  expect(counter).toBe(1);

  decrementCounter();

  expect(counter).toBe(0);
});
