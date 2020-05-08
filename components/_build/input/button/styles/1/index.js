import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import Button from '../../';
import { BaseWrapper, BaseButton, BaseLoadingCon } from '../base';
const Wrapper = styled(BaseWrapper).withConfig({
  displayName: "sc-1__Wrapper",
  componentId: "sc-1kzrjvf-0"
})([""]);
const ButtonInner = styled(BaseButton).withConfig({
  displayName: "sc-1__ButtonInner",
  componentId: "sc-1kzrjvf-1"
})(["", " div[data-name=\"icon-wrapper\"]{grid-column-end:-1;}"], ({
  activeColor,
  disabled,
  matchesUrl
}) => "\n  background-color: ".concat(matchesUrl && !disabled && "var(--color-".concat(activeColor, ")"), ";\n  border-color: ").concat(matchesUrl && !disabled && "var(--color-".concat(activeColor, ")"), ";\n  border-radius: 0 50px 50px 0;\n  width: 200px;\n  justify-content: start;\n  grid-gap: 20px;\n\n  :hover {\n    background-color: ").concat(!disabled && activeColor, ";\n    border-color: ").concat(!disabled && activeColor, ";\n  };\n"));
const LoadingCon = styled(BaseLoadingCon).withConfig({
  displayName: "sc-1__LoadingCon",
  componentId: "sc-1kzrjvf-2"
})(["border-radius:0 50px 50px 0;"]);
export default (props => /*#__PURE__*/React.createElement(Button, _extends({
  Wrapper: Wrapper,
  ButtonInner: ButtonInner,
  LoadingCon: LoadingCon
}, props)));