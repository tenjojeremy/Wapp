import _extends from "@babel/runtime/helpers/extends";
import React, { memo } from 'react';
import Box from '../../../../../dataDisplay/box';
import Typogrgraphy from '../../../../../dataDisplay/typography';
import SelectBase from '../../';
import { defaultProps, propTypes } from '../propTypes';

const Item = ({
  label,
  backgroundColor,
  foregroundColor,
  titleColor,
  titleVariant,
  title,
  wrapperStyles,
  ...styles
}) => {
  return /*#__PURE__*/React.createElement(Box, {
    styles: {
      justifyItems: 'center',
      gridGap: title && 'xxs',
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Box, {
    size: "43px",
    styles: {
      backgroundColor: backgroundColor,
      color: foregroundColor,
      borderRadius: '100px',
      justifyItems: 'center',
      alignItems: 'center',
      ...styles
    }
  }, /*#__PURE__*/React.createElement(Typogrgraphy, {
    text: label,
    variant: titleVariant
  })), title && /*#__PURE__*/React.createElement(Typogrgraphy, {
    text: title,
    variant: titleVariant,
    color: titleColor
  }));
};

Item.defaultProps = defaultProps;
Item.propTypes = propTypes;

const SelectTVGuide = ({
  data,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(SelectBase, _extends({
    data: data,
    Item: Item
  }, rest));
};

export default memo(SelectTVGuide);