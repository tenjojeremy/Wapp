import _extends from '@babel/runtime/helpers/extends';
import React, { memo, useEffect, useState } from 'react';
import Animation from '../../../../utils/animations/wap';
import Icon from '../..';
import { iconStyles } from './styles';
import { defaultProps, propTypes } from './propTypes.js';

const IconSrollBackTop = ({
  iconProps,
  animationProps,
  offset
}) => {
  const [show, setshow] = useState(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  const handleScroll = () => {
    const show = window.scrollY > offset;
    setshow(show);
  };

  const handleClick = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  return /*#__PURE__*/React.createElement(Animation, _extends({
    show: show
  }, animationProps), /*#__PURE__*/React.createElement(Icon, _extends({
    name: 'arrow/1',
    background: true,
    color: 'white',
    onClick: handleClick,
    style: iconStyles,
    backgroundColor: 'blackOpaque'
  }, iconProps)));
};

IconSrollBackTop.defaultProps = defaultProps;
IconSrollBackTop.propTypes = propTypes;
export default memo(IconSrollBackTop);