import _extends from '@babel/runtime/helpers/extends';
import React, { memo } from 'react';
import Box from '../../../box';
import Typography from '../../../typography';
import Image from '../../../../media/image';
import { WrapperStyles, TypographyWrapperStyles, ImageStyles } from './styles';
import { defaultProps, propTypes } from './propTypes';

const AppbarCangov = ({
  title,
  logo,
  onClick,
  wrapperProps,
  typographyProps,
  imageProps
}) => /*#__PURE__*/React.createElement(Box, _extends({
  styles: WrapperStyles
}, wrapperProps), /*#__PURE__*/React.createElement(Box, {
  styles: TypographyWrapperStyles,
  onClick: onClick,
  role: 'button'
}, /*#__PURE__*/React.createElement(Typography, _extends({
  text: title
}, typographyProps)), typographyProps.carot && /*#__PURE__*/React.createElement('svg', {
  width: '11',
  height: '9',
  viewBox: '0 0 11 9',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}, /*#__PURE__*/React.createElement('path', {
  d: 'M5.5 9L0.73686 0.750001L10.2631 0.75L5.5 9Z',
  fill: 'var(--color-'.concat(typographyProps.color, ')')
}))), /*#__PURE__*/React.createElement(Image, _extends({
  src: logo
}, ImageStyles, imageProps)));

AppbarCangov.defaultProps = defaultProps;
AppbarCangov.propTypes = propTypes;
export default memo(AppbarCangov);