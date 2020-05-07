import React, { memo } from 'react';
import Icon from '../../../../icon';
import StarsRating from '../../../../../feedback/rating';
import Typography from '../../../../typography';
import Avatar from '../../../../avatars';
import { Wrapper, ContactIcons, InfoCon, Rating, Location, LocationIcons, NumReview } from './details.styles';
import { defaultProps, propTypes } from './details.propTypes';

const DetailsCard = ({
  src,
  name,
  rating,
  location
}) => {
  // Global State
  const reviewsLength = 65;
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Avatar, {
    name: name,
    src: src,
    size: 120
  }), /*#__PURE__*/React.createElement(InfoCon, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    text: name
  }), /*#__PURE__*/React.createElement(Rating, {
    onClick: () => console.log('open review')
  }, /*#__PURE__*/React.createElement(StarsRating, {
    count: 5,
    value: rating,
    size: 17,
    color1: '#EEEEEE',
    color2: '#ffd700',
    edit: false
  })), /*#__PURE__*/React.createElement(NumReview, null, /*#__PURE__*/React.createElement("span", null, " ", reviewsLength), " Reviews"), /*#__PURE__*/React.createElement(LocationIcons, null, /*#__PURE__*/React.createElement(Location, null, location, " "), /*#__PURE__*/React.createElement(ContactIcons, null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone/material",
    color: "primary"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "message/1",
    color: "primary"
  })))));
};

DetailsCard.defaultProps = defaultProps;
DetailsCard.propTypes = propTypes;
export default memo(DetailsCard);