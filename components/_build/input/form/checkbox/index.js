import React, { memo } from 'react';
import { defaultProps, propTypes } from './propTypes';

const Switch = ({
  Wrapper
}) => {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "c1",
    id: "c1"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "c1"
  }, "Checkbox"));
};

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
export default memo(Switch);