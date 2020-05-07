import React, { memo } from 'react';
import Avatar from '../../';
import Rating from '../../../../feedback/rating';
import { defaultProps, propTypes } from './stylistsInfo.propTypes';
import { Wrapper, StylistName } from './stylistsInfo.styles';

const StylistsInfo = ({
  name,
  rating,
  src,
  onInfoClick,
  onRatingChange
}) => {
  const size = 120;
  return /*#__PURE__*/React.createElement(Wrapper, {
    width: 120
  }, /*#__PURE__*/React.createElement(Avatar, {
    onClick: onInfoClick,
    name: name,
    rating: rating,
    src: src,
    radius: 10,
    size: size
  }), /*#__PURE__*/React.createElement(StylistName, {
    onClick: onInfoClick
  }, name), /*#__PURE__*/React.createElement(Rating, {
    onRatingChange: onRatingChange,
    value: rating,
    starDimension: '16',
    starSpacing: '1'
  }));
};

StylistsInfo.defaultProps = defaultProps;
StylistsInfo.propTypes = propTypes;
export default memo(StylistsInfo);