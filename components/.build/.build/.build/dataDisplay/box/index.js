import _extends from '@babel/runtime/helpers/extends';
import React, { memo, forwardRef } from 'react';
import { BoxWrapper } from './styles';

const Box = ({
  children,
  name,
  styles = {},
  ...rest
}, ref) => {
  return /*#__PURE__*/React.createElement(BoxWrapper, _extends({
    ref: ref,
    styles: {
      display: 'grid',
      ...styles
    },
    'data-box-name': name,
    'data-cy': name
  }, rest), children);
};

export default memo(forwardRef(Box));