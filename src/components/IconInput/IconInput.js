import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const STYLE = {
  small: {
    fontSize: 14,
    iconSize: 16,
    border: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    border: 2,
    height: 36,
  }
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);

`;
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLE[size];
  const id = `iconInput_${label}`;
  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': `${style.iconSize}px`}}>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <TextInput id={id} placeholder={placeholder} style={{
        '--width': `${width}px`,
        '--height': `${style.height / 16}rem`,
        '--border': `${style.border}px`,
        '--font-size': `${style.fontSize / 16}rem`,        
      }}
      />
  </Wrapper>
  );
};

export default IconInput;
