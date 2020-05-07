import _extends from '@babel/runtime/helpers/extends';
import React, { memo, lazy, Suspense, useState } from 'react';
import { defaultProps, propTypes } from './propTypes';
import { ImageWrapper, InnerImage } from './styles';
const LazyLoad = lazy(() => import(
/* webpackChunkLazyLoad: 'LazyLoadWrapper' */
'../../utils/rendering/lazyLoad'));

const Image = ({
  src,
  base64,
  alt,
  onClick,
  objectFit,
  definitions,
  isLazyLoaded,
  lazyLoadProps,
  styles,
  ...props
}) => {
  const [srcLoaded, setSrcLoaded] = useState(!base64); // In case  the src key in not called src in props, expects {src: <propsrcname>}

  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]]);
    }
  }

  const handleImageLoad = () => setSrcLoaded(true);

  const showBase = base64 && !srcLoaded;
  const srcDisplay = !base64 || srcLoaded ? 'block' : 'none';
  const onLoadFunction = showBase ? {
    onLoad: handleImageLoad
  } : {};

  const ImageComp = () => /*#__PURE__*/React.createElement(ImageWrapper, {
    onClick: () => onClick(props),
    styles: styles
  }, showBase && /*#__PURE__*/React.createElement(InnerImage, {
    'data-base64': true,
    src: base64,
    style: {
      objectFit
    },
    alt: alt
  }), /*#__PURE__*/React.createElement(InnerImage, _extends({
    alt: alt,
    src: src,
    style: {
      objectFit,
      display: srcDisplay
    }
  }, onLoadFunction)));

  return isLazyLoaded ? /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(LazyLoad, lazyLoadProps, /*#__PURE__*/React.createElement(ImageComp, null))) : /*#__PURE__*/React.createElement(ImageComp, null);
};

Image.defaultProps = defaultProps;
Image.propTypes = propTypes;
export default memo(Image);