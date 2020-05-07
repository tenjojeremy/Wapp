import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import styled from 'styled-components';
import Base from '../../base/tabs.base';
const Tab = styled.div.withConfig({
  displayName: 'sc-3__Tab',
  componentId: 'a8qg9w-0'
})(['cursor:pointer;user-select:none;border-radius:100px;padding:8px;width:150px;text-align:center;', ' span{transition:var(--transition-main);font-style:normal;font-weight:bold;font-size:11px;white-space:nowrap;color:var(--color-white);', ' ', '}'], ({
  active
}) => active && '\n    background-color: var(--color-white);\n    ', ({
  font
}) => '\n    font-family: var(--font-'.concat(font, ');\n    '), ({
  active
}) => active && '\n    color: var(--color-black);\n    ');
const WrapperStyles = {
  backgroundColor: 'rgba(255,255,255,0.6)',
  borderRadius: '100px',
  width: 'fit-content',
  margin: '0 auto',
  gridGap: 0
};
export default (props => /*#__PURE__*/React.createElement(Base, _extends({
  Tab: Tab
}, props, {
  style: WrapperStyles
})));