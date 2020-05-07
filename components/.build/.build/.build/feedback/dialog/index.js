import React, { memo, useRef } from 'react';
import Button from '../../input/button/styles/base/index';
import Typography from '../../dataDisplay/typography/index';
import { defaultProps, propTypes } from './propTypes';

const Dialog = ({
  Wrapper,
  ConfirmationCon,
  title,
  message,
  fullscreen,
  confirmationCancelText,
  confirmationAcceptText,
  onCancel,
  onAccept
}) => {
  const dialogRef = useRef(null);
  return /*#__PURE__*/React.createElement(Wrapper, {
    ref: dialogRef,
    fullscreen: fullscreen
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: 'h5',
    text: title,
    textAlign: 'left',
    color: 'white'
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: 'body1',
    text: message,
    textAlign: 'left',
    color: 'white'
  }), /*#__PURE__*/React.createElement(ConfirmationCon, null, /*#__PURE__*/React.createElement(Button, {
    outlined: true,
    text: confirmationCancelText,
    onClick: onCancel
  }), /*#__PURE__*/React.createElement(Button, {
    text: confirmationAcceptText,
    onClick: onAccept
  })));
};

Dialog.defaultProps = defaultProps;
Dialog.propTypes = propTypes;
export default memo(Dialog);