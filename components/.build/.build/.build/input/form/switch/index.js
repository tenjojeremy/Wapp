import React, { memo } from 'react';
import { defaultProps, propTypes } from './propTypes';

const Switch = ({
  Wrapper
}) => {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement('input', {
    type: 'checkbox',
    className: 'switch',
    name: 's1',
    id: 's1'
  }), /*#__PURE__*/React.createElement('label', {
    htmlFor: 's1'
  }, 'Switch'));
};

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
export default memo(Switch);