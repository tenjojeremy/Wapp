import React, { memo } from 'react';
import { defaultProps, propTypes } from './propTypes';

const AnimatedComponent = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, "adf");
};

AnimatedComponent.defaultProps = defaultProps;
AnimatedComponent.propTypes = propTypes;
export default memo(AnimatedComponent);