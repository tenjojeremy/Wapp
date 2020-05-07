import React, { memo } from 'react';
import Icon from '../..';
import { defaultProps, propTypes } from './propTypes.js';

const IconLike = ({
  liked,
  onLike,
  onUnlike
}) => liked ? /*#__PURE__*/React.createElement(Icon, {
  name: "heart/filled/material",
  onClick: onUnlike,
  background: true,
  color: "red"
}) : /*#__PURE__*/React.createElement(Icon, {
  name: "heart/outlined/material",
  onClick: onLike,
  background: true,
  color: "none"
});

IconLike.defaultProps = defaultProps;
IconLike.propTypes = propTypes;
export default memo(IconLike);