import React, { lazy, Suspense, Fragment } from 'react';
import Image from '../../media/image/index';
import Typography from '../typography';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper } from './styles';
const FileInput = lazy(() => import(
/* webpackChunkName: 'ButtonIcon' */
'../../media/files/fileInput'));

const Avatar = ({
  color,
  name,
  src,
  onClick,
  size,
  radius,
  inputProps,
  letterColor,
  borderColor,
  paddedBorder
}) => {
  const border = {
    border: "2px solid ".concat(borderColor ? "var(--color-".concat(borderColor, ")") : paddedBorder ? 'transparent' : null, " ")
  };
  let initials = name.split(' ');
  initials = initials.length > 1 ? initials[0].substring(0, 1) + initials[1].substring(0, 1) : initials[0].substring(0, 1);
  const WrappingComp = inputProps ? FileInput : Fragment;
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(WrappingComp, inputProps, /*#__PURE__*/React.createElement(Wrapper, {
    color: color,
    src: src,
    radius: radius,
    size: size,
    paddedBorder: paddedBorder
  }, src ? /*#__PURE__*/React.createElement(Image, {
    src: src,
    onClick: onClick,
    size: size,
    borderRadius: radius,
    styles: { ...border,
      width: size,
      height: size
    }
  }) : /*#__PURE__*/React.createElement(Typography, {
    text: initials,
    color: letterColor
  }))));
};

Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;
export default Avatar;