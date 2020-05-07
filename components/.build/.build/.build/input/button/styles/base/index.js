import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import styled from 'styled-components';
import Button from '../../';
export const BaseWrapper = styled.div.withConfig({
  displayName: 'base__BaseWrapper',
  componentId: 'ad2ubb-0'
})(['position:relative;button{border-radius:0;border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;&:focus{outline:none;}&:active{border:0;padding:0;}&::-moz-focus-inner{border:0;padding:0;}}']);
export const BaseButton = styled.div.withConfig({
  displayName: 'base__BaseButton',
  componentId: 'ad2ubb-1'
})(['background-color:', ';border-radius:100px;cursor:pointer;padding:0 var(--spacing-s);display:grid;align-items:center;justify-content:center;grid-auto-flow:column;text-align:center;transition:0.2s ease-in-out;height:40px;border:2px solid ', ';user-select:none;box-sizing:content-box;&:active{border:2px solid ', ';}', ' ', ' ', ' ', ''], ({
  color
}) => 'var(--color-'.concat(color, 'Lighter)'), ({
  color
}) => 'var(--color-'.concat(color, 'Lighter)'), ({
  color
}) => 'var(--color-'.concat(color, 'Darker)'), ({
  active,
  color
}) => active && 'border: 2px solid var(--color-'.concat(color, 'Darker);'), ({
  disabled
}) => disabled && '\n  background-color: var(--color-disabledLighter);\n  border: 2px solid var(--color-disabledLighter);\n  &:active {\n    border: 2px solid var(--color-disabledLighter);\n  }', ({
  outlined
}) => outlined && 'background-color: transparent;\n     border: 2px solid var(--color-white);\n     &:active {\n       border: 2px solid var(--color-white);\n    }', ({
  icon,
  color
}) => icon && '\n  svg {\n    margin-left: 10px;\n    fill: var(--color-'.concat(color, 'Darker);\n    }\n  '));
export const BaseLoadingCon = styled.div.withConfig({
  displayName: 'base__BaseLoadingCon',
  componentId: 'ad2ubb-2'
})(['', ''], ({
  color
}) => '\n    position: absolute;\n    top:0;\n    right:0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--color-'.concat(color, 'Opaque);\n    border-radius: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  '));
export default (props => /*#__PURE__*/React.createElement(Button, _extends({
  Wrapper: BaseWrapper,
  ButtonInner: BaseButton,
  LoadingCon: BaseLoadingCon
}, props)));