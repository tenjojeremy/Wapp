import React, { memo } from 'react';
import List from '../../../../list';
import Image from '../../../../../media/image';
import IconBack from '../../../../icon/special/back';
import Menu from '../../../../../input/menu/styles/material';
import Donut from '../../../../../feedback/progress/donut';
import Chip from '../../../../chip';
import LikeButton from '../../../../icon/special/like';
import Box from '../../../../box';
import { Wrapper, TopRow, ImageCon, donutStyle, LikeIconCon } from './photo.styles';
import { defaultProps } from './photo.propTypes';

const CardPhoto = ({
  photoUrl,
  onTagClick,
  onGoBack,
  goBackUrl,
  menuOptions,
  onMenuOptionSelect,
  children,
  likeable,
  liked,
  onLike,
  onUnlike,
  style
}) => {
  const goBack = () => onGoBack();

  const handleOnLike = () => onLike();

  const handleOnUnlike = () => onUnlike(); //Template


  return /*#__PURE__*/React.createElement(Wrapper, {
    style: style
  }, /*#__PURE__*/React.createElement(Box, {
    styles: TopRow
  }, /*#__PURE__*/React.createElement(IconBack, {
    to: goBackUrl,
    onGoBack: goBack
  }), menuOptions.length > 0 && /*#__PURE__*/React.createElement(Menu, {
    options: menuOptions,
    onSelect: onMenuOptionSelect
  })), /*#__PURE__*/React.createElement(ImageCon, null, photoUrl ? /*#__PURE__*/React.createElement(Image, {
    src: photoUrl,
    cursor: 'default',
    position: 'top',
    width: '100%'
  }) : /*#__PURE__*/React.createElement(Donut, {
    style: donutStyle
  }), likeable && /*#__PURE__*/React.createElement(LikeIconCon, null, /*#__PURE__*/React.createElement(LikeButton, {
    liked: liked,
    onLike: handleOnLike,
    onUnlike: handleOnUnlike
  }))), children);
};

CardPhoto.defaultProps = defaultProps;
export default memo(CardPhoto);