import _extends from '@babel/runtime/helpers/extends';
import React, { memo, lazy, Suspense, Fragment, useEffect, useState } from 'react';
import { Link } from '../../navigation/router';
import Typography from '../../dataDisplay/typography';
import Animation from '../../utils/animations/wap';
import { defaultProps, propTypes } from './propTypes';
const Icon = lazy(() => import(
/* webpackChunkName: 'Icon' */
'../../dataDisplay/icon'));
const FileInput = lazy(() => import(
/* webpackChunkName: 'FileiNput' */
'../../media/files/fileInput'));

const Button = ({
  Wrapper,
  ButtonInner,
  LoadingCon,
  color,
  text,
  onClick,
  disabled,
  active,
  outlined,
  style,
  iconName,
  dataCy,
  loading,
  inputProps,
  typographyVariant,
  loadingComp,
  url,
  ...rest
}) => {
  const [ProgressComponent, setProgressComponent] = useState(null);
  const textColor = disabled ? 'disabledDarker' : outlined ? 'white' : ''.concat(color, 'Darker');
  const isLoading = typeof loading !== 'string' ? loading : false;
  const WrappingComp = inputProps ? FileInput : Fragment;
  const matchesUrl = url && location.pathname === url;
  const Redirect = url ? Link : Fragment;
  const redirectProps = url ? {
    to: url
  } : null;
  useEffect(() => {
    if (typeof loading !== 'string') importLoadingComoponent();
  }, []);

  const importLoadingComoponent = async () => {
    let Comp = await import('../../feedback/progress/'.concat(loadingComp));
    Comp = Comp.default;
    setProgressComponent(Comp);
  };

  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(WrappingComp, inputProps, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Redirect, redirectProps, /*#__PURE__*/React.createElement('button', {
    onClick: disabled ? () => null : onClick,
    'data-cy': dataCy
  }, /*#__PURE__*/React.createElement(ButtonInner, _extends({
    color: color,
    disabled: disabled,
    active: active,
    outlined: outlined,
    icon: iconName,
    style: style,
    isLoading: isLoading,
    matchesUrl: matchesUrl
  }, rest), /*#__PURE__*/React.createElement(Typography, {
    text: text,
    variant: typographyVariant,
    styles: {
      color: textColor
    }
  }), iconName && /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    noBackground: true
  })))), /*#__PURE__*/React.createElement(Animation, {
    name: 'showHide',
    show: isLoading
  }, /*#__PURE__*/React.createElement(LoadingCon, {
    color: color
  }, ProgressComponent && /*#__PURE__*/React.createElement(ProgressComponent, null))))));
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default memo(Button);