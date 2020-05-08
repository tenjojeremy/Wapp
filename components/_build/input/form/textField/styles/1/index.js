import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import TextField from '../../';
const Wrapper = styled.div.withConfig({
  displayName: "sc-1__Wrapper",
  componentId: "bi5t54-0"
})(["transition:.2s;background-color:", ";color:", ";border-radius:10px;padding:var(--spacing-xxs,4px) var(--spacing-s,8px);display:flex;align-items:center;text-align:center;width:", ";border:2px solid transparent;img{color:", ";cursor:pointer;}", " ", " svg{fill:", ";}", "  "], ({
  backgroundColor
}) => "var(--color-".concat(backgroundColor, ")"), ({
  textColor
}) => "var(--color-".concat(textColor, ")"), ({
  width
}) => width, ({
  color
}) => "var(--color-".concat(color, ")"), ({
  round
}) => round && " border-radius: 100px;", ({
  isFocused,
  foregroundColor
}) => isFocused && "border: 2px solid var(--color-".concat(foregroundColor, ");"), ({
  foregroundColor
}) => "var(--color-".concat(foregroundColor, ")"), ({
  isValid
}) => !isValid && "border: 2px solid var(--color-red);");
const Input = styled.input.withConfig({
  displayName: "sc-1__Input",
  componentId: "bi5t54-1"
})(["::placeholder{opacity:0.5;color:", ";}color:", ";font-family:", ";font-size:16px;width:100%;border:none;outline:none;background-color:transparent;"], ({
  color
}) => "var(--color-".concat(color, "Darker)"), ({
  color
}) => "var(--color-".concat(color, "Darker)"), ({
  font
}) => "var(--font-".concat(font, ")"));
const IconLeftCon = styled.div.withConfig({
  displayName: "sc-1__IconLeftCon",
  componentId: "bi5t54-2"
})(["margin-right:5px;"]);
const IconRightCon = styled.div.withConfig({
  displayName: "sc-1__IconRightCon",
  componentId: "bi5t54-3"
})(["margin-left:10px;"]);
const InputCon = styled.div.withConfig({
  displayName: "sc-1__InputCon",
  componentId: "bi5t54-4"
})(["display:grid;grid-auto-flow:column;grid-gap:var(--spacing-xs);position:relative;"]);
const CloseIconCon = styled.div.withConfig({
  displayName: "sc-1__CloseIconCon",
  componentId: "bi5t54-5"
})(["display:flex;align-items:center;svg{fill:", ";}"], ({
  textColor
}) => "var(--color-".concat(textColor, ")"));
export default (props => /*#__PURE__*/React.createElement(TextField, _extends({
  Wrapper: Wrapper,
  Input: Input,
  IconLeftCon: IconLeftCon,
  IconRightCon: IconRightCon,
  InputCon: InputCon,
  CloseIconCon: CloseIconCon
}, props)));