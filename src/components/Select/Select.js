import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Pizzazz = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
  width: var(--size);
  height: var(--size);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const size = 24;
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Pizzazz>
        {displayedValue}
        <IconWrapper style={{ "--size": `${size}px` }}>
          <Icon id="chevron-down" strokeWidth="1" size={size}></Icon>
        </IconWrapper>
      </Pizzazz>
    </Wrapper>
  );
};

export default Select;
