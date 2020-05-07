import _extends from '@babel/runtime/helpers/extends';
import React, { useState, memo } from 'react';
import Menu_ui from '@material-ui/core/Menu';
import Item from '@material-ui/core/MenuItem';
import Icon from '../../../../dataDisplay/icon';
import { defaultProps, propTypes } from '../../propTypes';

const Menu = ({
  options,
  onSelect,
  itemProps,
  iconProps,
  ...rest
}) => {
  const optionsLength = options.length;
  const [anchorEl, setanchorEl] = useState(null);

  const handleClose = ({
    target: {
      dataset: {
        option: selectedOption
      }
    }
  }) => {
    setanchorEl(null);
    selectedOption && onSelect(selectedOption);
  };

  const handleClick = ({
    currentTarget
  }) => setanchorEl(currentTarget);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, _extends({
    onClick: handleClick,
    name: 'options/material'
  }, iconProps)), optionsLength > 0 && /*#__PURE__*/React.createElement(Menu_ui, _extends({
    id: 'simple-menu',
    anchorEl: anchorEl,
    open: !!anchorEl,
    onClose: handleClose
  }, rest), options.map(option => option && /*#__PURE__*/React.createElement(Item, _extends({
    key: option,
    'data-option': option,
    onClick: handleClose
  }, itemProps), option))));
};

Menu.defaultProps = defaultProps;
Menu.propTypes = propTypes;
export default memo(Menu);