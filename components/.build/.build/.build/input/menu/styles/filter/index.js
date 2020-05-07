import _extends from '@babel/runtime/helpers/extends';
import React, { useState, memo } from 'react';
import Typography from '../../../../dataDisplay/typography/';
import Animation from '../../../../utils/animations/wap/index';
import Overlay from '../../../../utils/overlay/index';
import Icon from '../../../../dataDisplay/icon/index';
import Box from '../../../../dataDisplay/box/index';
import { defaultProps, propTypes } from '../../propTypes';
import styles from './styles';

const Menu = ({
  iconProps,
  iconWrapperStyles
}) => {
  const [show, setShow] = useState(null);
  const iconName = !show ? 'filter/1' : 'close/material';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    styles: { ...styles.icon,
      ...iconWrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Icon, _extends({
    name: iconName,
    size: 56,
    backgroundColor: 'primary',
    dark: true,
    background: true,
    color: 'primary',
    onClick: () => setShow(!show)
  }, iconProps))), /*#__PURE__*/React.createElement(Animation, {
    show: show,
    name: 'outmostIn',
    style: styles.animationBox
  }, /*#__PURE__*/React.createElement(Box, {
    styles: styles.filterBox
  }, /*#__PURE__*/React.createElement(Typography, {
    text: 'Filter By',
    styles: styles.filterBox.title
  }))), /*#__PURE__*/React.createElement(Overlay, {
    show: show,
    backgroundcolor: 'primary',
    onClick: () => setShow(false)
  }));
};

Menu.defaultProps = defaultProps;
Menu.propTypes = propTypes;
export default memo(Menu);