import { css } from "@emotion/core";
import { ColorProps } from "./type";

export const timer = (color: ColorProps) =>
  css({
    fontSize: 24,
    color: color
  });

export const root = css({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});
