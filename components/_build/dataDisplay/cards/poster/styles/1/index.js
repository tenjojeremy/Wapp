import React, { memo, lazy, Suspense, useRef } from 'react';
import Image from '../../../../../media/image/index';
import { defaultProps, propTypes } from '../../propTypes';
import { Wrapper } from './styles';
const Typography = lazy(() => import(
/* webpackChunkName: 'Typography' */
'../../../../typography'));
const Animation = lazy(() => import(
/* webpackChunkName: 'Animation' */
'../../../../../utils/animations/wap'));

const Poster1 = ({
  src,
  onClick,
  alt,
  loading,
  backgroundColor,
  size,
  noAnimation,
  ...rest
}) => {
  const wrapperRef = useRef(null);

  const handleClick = () => onClick(rest);

  const height = size;
  const width = height / 1.5;
  const heightString = "".concat(height, "px");
  const widthString = "".concat(width, "px");
  return /*#__PURE__*/React.createElement(Wrapper, {
    onClick: handleClick,
    style: {
      width: widthString,
      height: heightString
    },
    src: src,
    backgroundColor: backgroundColor,
    ref: wrapperRef,
    isLoading: loading,
    noAnimation: noAnimation
  }, src && /*#__PURE__*/React.createElement(Image, {
    src: src,
    styles: {
      width: widthString,
      height: heightString
    },
    alt: alt
  }), !src && /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Typography, {
    text: alt,
    styles: {
      color: 'white',
      textAlign: 'center'
    },
    variant: "caption"
  })), loading && /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Animation, {
    name: "blinking",
    show: true,
    el: wrapperRef
  })));
};

Poster1.defaultProps = defaultProps;
Poster1.propTypes = propTypes;
export default memo(Poster1);