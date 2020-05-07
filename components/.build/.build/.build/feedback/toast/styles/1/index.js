import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../dataDisplay/icon';
export const Wrapper = styled.div.withConfig({
  displayName: 'sc-1__Wrapper',
  componentId: 'sc-1sbmlye-0'
})(['background:', ';color:', ';z-index:999;border-radius:100px;width:fit-content;min-width:150px;max-width:300px;display:grid;grid-auto-flow:column;align-items:center;justify-content:start;padding:var(--spacing-s) var(--spacing-m);grid-gap:var(--spacing-s);user-select:none;position:fixed;bottom:0;left:0;right:0;word-break:break-word;', ' *{cursor:auto;}img{width:20px;height:20px;}span{font-family:', ';text-align:left;font-weight:100;font-size:14px;line-height:20px;}'], ({
  background
}) => 'var(--color-'.concat(background, ')'), ({
  foreground
}) => 'var(--color-'.concat(foreground, ')'), ({
  location
}) => location === 'center' ? '\n  margin: 0 auto;  \n  ' : '', ({
  font
}) => 'var(--font-'.concat(font, ')'));
export default (({
  type = 'success',
  background = 'black',
  foreground = 'white',
  message = 'message a mejfalsd ',
  iconNameSuccess = 'checkmark/1',
  iconNameError = 'close/1',
  display = 'none',
  font = 'primary',
  location = 'center'
}) => {
  const iconName = type === 'success' ? iconNameSuccess : iconNameError;
  const iconColor = type === 'success' ? 'success' : 'error';
  return /*#__PURE__*/React.createElement(Wrapper, {
    background: background,
    foreground: foreground,
    display: display,
    font: font,
    location: location
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    color: iconColor,
    plain: true
  }), /*#__PURE__*/React.createElement('span', null, ' ', message));
});