import React, { memo, useState, useEffect, lazy, Fragment, Suspense } from 'react';
import { WrapperIcon, Wrapper } from './styles';
import { defaultProps, propTypes } from './propTypes';
const FileInput = lazy(() => import(
/* webpackChunkName: 'FileInput' */
'../../media/files/fileInput'));
const Typogrgraphy = lazy(() => import(
/* webpackChunkName: 'Typogrgraphy' */
'../typography'));

const Icon = ({
  name,
  style,
  color,
  onClick,
  size,
  dark,
  outlined,
  link,
  inputProps,
  backgroundColor,
  plain,
  backgroundSize,
  center,
  router,
  label,
  height,
  width,
  wrapperStyles
}) => {
  const [IconComp, setIconComp] = useState(null);
  const strokeTypes = ['feather'];
  const iconType = name.split('/')[1].split('-')[0];
  const isStroke = strokeTypes.includes(iconType);
  const {
    push
  } = router;

  const getModule = async () => {
    if (name) {
      const module = await import("./library/".concat(name, ".js"));
      setIconComp(module.default());
    }
  };

  useEffect(() => {
    getModule();
  }, [name, label]);

  const handleClick = e => {
    link && push(link);
    onClick(e);
  };

  const WrappingComp = inputProps ? FileInput : Fragment;
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(WrappingComp, inputProps, /*#__PURE__*/React.createElement(Wrapper, {
    label: label,
    "data-name": "icon-wrapper",
    style: wrapperStyles
  }, /*#__PURE__*/React.createElement(WrapperIcon, {
    plain: plain,
    style: style,
    color: color,
    onClick: handleClick,
    size: size,
    dark: dark,
    outlined: outlined,
    backgroundColor: backgroundColor,
    isStroke: isStroke,
    backgroundSize: backgroundSize,
    center: center,
    height: height,
    width: width
  }, IconComp), label.text && /*#__PURE__*/React.createElement(Typogrgraphy, label))));
};

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;
export default memo(Icon);