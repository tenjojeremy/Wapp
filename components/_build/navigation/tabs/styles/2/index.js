import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import Base from '../../base/tabs.base';
const Tab = styled.div.withConfig({
  displayName: "sc-2__Tab",
  componentId: "sc-1222623-0"
})(["cursor:pointer;user-select:none;span{transition:var(--transition-main);font-style:normal;font-weight:bolder;font-size:22px;line-height:27px;white-space:nowrap;", " ", "}"], ({
  font
}) => "\n    font-family: var(--font-".concat(font, ");\n    "), ({
  color,
  isActive
}) => isActive ? "\n    color: var(--color-".concat(color, ");\n    ") : "\n    color: var(--color-".concat(color, "Opaque);\n    "));
export default (props => /*#__PURE__*/React.createElement(Base, _extends({
  Tab: Tab
}, props)));