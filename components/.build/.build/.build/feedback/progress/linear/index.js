import React, { memo } from 'react';
import { defaultProps, propTypes } from './linear.propTypes';
import { Wrapper } from './linear.styles';

const Linear = ({
  color
}) => /*#__PURE__*/React.createElement(Wrapper, {
  color: color
}, /*#__PURE__*/React.createElement('progress', {
  className: 'pure-material-progress-linear'
}));

Linear.defaultProps = defaultProps;
Linear.propTypes = propTypes;
export default memo(Linear);