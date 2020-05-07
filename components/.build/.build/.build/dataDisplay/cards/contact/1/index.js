import React from 'react';
import Icon from '../../../icon';
import Avatar from '../../../avatars';
import Rating from '../../../../feedback/rating';
import Button from '../../../../input/button/styles/base';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper, Info, City, Name, ButtonCon, AvatarInfoCOn } from './styles';

const Contact = ({
  name,
  rating,
  city,
  onContactClick,
  onAvatarClick,
  photoUrl,
  onChatBtnClick
}) => /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(AvatarInfoCOn, null, /*#__PURE__*/React.createElement(Avatar, {
  photoUrl: photoUrl,
  name: name,
  onClick: onAvatarClick
}), /*#__PURE__*/React.createElement(Info, null, /*#__PURE__*/React.createElement(Name, null, name), /*#__PURE__*/React.createElement(Rating, {
  rating: rating,
  starDimension: '15px'
}), /*#__PURE__*/React.createElement(City, null, city))), /*#__PURE__*/React.createElement(ButtonCon, null, /*#__PURE__*/React.createElement(Button, {
  onClick: onContactClick,
  text: 'Book'
}), /*#__PURE__*/React.createElement(Icon, {
  name: 'comment/material',
  onCLick: onChatBtnClick,
  color: 'primary',
  dark: true
})));

Contact.defaultProps = defaultProps;
Contact.propTypes = propTypes;
export default Contact;