import React, { memo } from 'react';
import LazyLoad from 'react-lazyload';
export default memo(({
  children,
  ...props
}) => {
  const isSupported = window.IntersectionObserver || false;
  const defaultProps = {
    offset: 100,
    once: true
  };
  const mergedProps = { ...defaultProps,
    ...props
  };
  return isSupported ? /*#__PURE__*/React.createElement(LazyLoad, mergedProps, children) : children;
});