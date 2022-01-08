import React from "react";
import styled from "styled-components";

import {COLORS} from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {"--height": "8px", "--padding": "0px", "--radius": "4px"},
  medium: {"--height": "12px", "--padding": "0px", "--radius": "4px"},
  large: {"--height": "24px", "--padding": "4px", "--radius": "8px"},
};

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const ProgressBar = ({value, size}) => {
  const realValue = Math.max(MIN_VALUE, Math.min(MAX_VALUE, value));
  const percentage = (realValue / MAX_VALUE) * 100;
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={MIN_VALUE}
      aria-valuemax={MAX_VALUE}
      aria-valuenow={realValue}
      style={{
        "--percentage": percentage + "%",
        ...SIZES[size],
      }}
    >
      <Roundness>
        <Bar>
          <VisuallyHidden>{percentage}%</VisuallyHidden>
        </Bar>
      </Roundness>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  appearance: none;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const Roundness = styled.div`
  height: 100%;
  border-radius: calc(var(--radius) - var(--padding));
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  width: var(--percentage);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
