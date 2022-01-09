import React from "react";
import styled from "styled-components";

import {COLORS} from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {fontSize: 14, border: 1},
  large: {fontSize: 18, border: 2},
};

const IconInput = ({label, icon, width = 250, size, placeholder}) => {
  const sizes = SIZES[size];
  return (
    <Wrapper
      style={{
        "--font-size": `${sizes.fontSize / 16}rem`,
        "--border": `${sizes.border}px`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputInput placeholder={placeholder} width={width} />
      <InputIcon size={sizes.fontSize} id={icon} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  border: 0 solid ${COLORS.black};
  border-bottom-width: var(--border);
  width: fit-content;
  position: relative;
`;

const InputInput = styled.input`
  border: none;
  padding-left: calc(10px + var(--font-size));
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  font-weight: 700;
  border-radius: 0.001px;
  width: ${(p) => p.width}px;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  :hover {
    color: ${COLORS.black};
  }

  :focus {
    outline: var(--border) solid ${COLORS.primary};
    outline-offset: calc(var(--border) * 2);
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  height: var(--font-size);
  left: 2px;
`;

export default IconInput;
