import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const Donut = ({
  style,
  color = 'primary'
}) => /*#__PURE__*/React.createElement(Wrapper, {
  style: style,
  color: color
}); // Style


const donutSpin = keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
const Wrapper = styled.div.withConfig({
  displayName: "donut__Wrapper",
  componentId: "tqrwos-0"
})(["display:inline-block;border:4px solid rgba(0,0,0,0.1);border-left-color:", ";border-radius:50%;width:30px;height:30px;animation:", " 0.7s linear infinite;"], ({
  color
}) => "var(--color-".concat(color, ")"), donutSpin);
export default memo(Donut);