/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useChangeColor, useFizzBuzz } from "./hooks";
import { timer, root } from "./style";

const App: React.FC = () => {
  const value = useFizzBuzz();
  const color = useChangeColor(value);

  return (
    <div css={root}>
      <h1 css={timer(color)}>Fizz Buzz Color Timer</h1>
      <div>{value}</div>
    </div>
  );
};

export default App;
