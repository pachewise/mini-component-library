import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLE = {
  large: {
    padding: 2,
    height: 15,
  },
  medium: {
    padding: 0,
    height: 10,
  },
  small: {
    padding: 0,
    height: 5,
  },
};

const width = 100;
const maxBorderRadius = 4;
const Wrapper = styled.div`
  border-radius: ${maxBorderRadius}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  height: var(--height);
  width: ${width}px;
`;
const Progress = styled.div`
  height: 100%;
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: ${maxBorderRadius}px var(--border-radius) var(--border-radius)
    ${maxBorderRadius}px;
`;

const calcRadius = (value) =>
  Math.min(
    maxBorderRadius,
    Math.max((value - width * 0.98) / (width * 0.02), 0)
  );

const ProgressBar = ({ value, size }) => {
  const style = STYLE[size];
  const borderRadius = `${calcRadius(value)}px`;
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--height": `${style.height}px`,
        "--padding": `${style.padding}px`,
      }}
    >
      <Progress
        style={{ "--width": `${value}%`, "--border-radius": borderRadius }}
      >
        <VisuallyHidden>Progress: {value}%</VisuallyHidden>
      </Progress>
    </Wrapper>
  );
};

export default ProgressBar;
