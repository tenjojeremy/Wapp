import _extends from "@babel/runtime/helpers/extends";
import React, { memo } from 'react';
import Box from '../../dataDisplay/box';
import { defaultProps, propTypes } from './propTypes';
import * as localStyles from './styles';

const Link = ({
  children,
  styles,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(Box, _extends({
    styles: { ...localStyles.wrapper,
      ...styles
    }
  }, rest, {
    as: "a"
  }), children);
};

Link.defaultProps = defaultProps;
Link.propTypes = propTypes;
export default memo(Link);