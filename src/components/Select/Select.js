import React from "react";
import styled from "styled-components";

import {COLORS} from "../../constants";
import Icon from "../Icon";
import {getDisplayedValue} from "./Select.helpers";

const Select = ({value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Facade>
        {displayedValue} <Icon id="chevron-down" size={24} strokeWidth={2} />
      </Facade>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
`;

const SelectElement = styled.select`
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
`;

const Facade = styled.div`
  appearance: none;
  padding: 10px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  border: none;
  width: max-content;
  white-space: nowrap;
  display: flex;
  gap: 16px;
  align-items: center;

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }

  ${SelectElement}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default Select;
