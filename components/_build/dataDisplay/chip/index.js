import React from 'react';
import Icon from '../icon/index';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper, Text } from './styles';

const Chip = ({
  color,
  text,
  onClick,
  toRemove
}) => {
  return /*#__PURE__*/React.createElement(Wrapper, {
    color: color,
    onClick: onClick
  }, toRemove && /*#__PURE__*/React.createElement(Icon, {
    name: "close/round-filled",
    size: "18px"
  }), /*#__PURE__*/React.createElement("div", null, "#", /*#__PURE__*/React.createElement(Text, {
    color: color
  }, text)));
};

Chip.defaultProps = defaultProps;
Chip.propTypes = propTypes;
export default Chip;