import React, { useState, memo, useEffect } from 'react';
import Form from '../../../../input/form/';
import Box from '../../../box/index';
import Textfield from '../../../../input/form/textField/styles/1/index';
import Icon from '../../';
import Animation from '../../../../utils/animations/wap';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper, WrapperInput } from './styles';

const IconSearch = ({
  mainIcon,
  closeIcon,
  backgroundColor,
  onSubmit,
  boxShadow,
  inputName,
  styles
}) => {
  const [show, setShow] = useState(null);
  useEffect(() => {
    const inputEl = document.querySelector('input[id='.concat(inputName, ']'));
    if (show) inputEl.focus();else inputEl.blur();
  }, [show]);

  const toggleShow = () => setShow(!show);

  return /*#__PURE__*/React.createElement(Box, {
    styles: Wrapper
  }, /*#__PURE__*/React.createElement(Box, {
    styles: WrapperInput
  }, /*#__PURE__*/React.createElement(Animation, {
    show: show
  }, /*#__PURE__*/React.createElement(Form, {
    onSubmitSuccess: onSubmit
  }, /*#__PURE__*/React.createElement(Textfield, {
    name: inputName,
    placeholder: 'Search...'
  })))), /*#__PURE__*/React.createElement(Icon, {
    style: styles,
    onClick: toggleShow,
    name: show ? closeIcon : mainIcon,
    backgroundColor: backgroundColor,
    boxShadow: boxShadow
  }));
};

IconSearch.defaultProps = defaultProps;
IconSearch.propTypes = propTypes;
export default memo(IconSearch);