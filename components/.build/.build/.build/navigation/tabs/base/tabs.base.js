import React from 'react';
import { Wrapper } from './tabs.base.styles';
import { defaultProps, propTypes } from './tabs.base.propTypes';

const Tabs = ({
  Tab,
  data,
  color,
  font,
  style,
  router
}) => {
  const {
    history: {
      push
    },
    location: {
      pathname
    }
  } = router; //Template

  return /*#__PURE__*/React.createElement(Wrapper, {
    style: { ...style
    },
    color: color
  }, data.map(({
    label,
    link
  }) => {
    const active = pathname === link;
    return /*#__PURE__*/React.createElement(Tab, {
      color: color,
      key: label,
      onClick: () => push(link),
      font: font,
      active: active
    }, /*#__PURE__*/React.createElement('span', null, label));
  }));
};

Tabs.defaultProps = defaultProps;
Tabs.propTypes = propTypes;
export default Tabs;