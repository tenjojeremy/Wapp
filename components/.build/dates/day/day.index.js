import _extends from "@babel/runtime/helpers/extends";
import React, { memo } from 'react';
import { defaultProps, propTypes } from './day.propTypes';
import { Wrapper, DayCon, StatusCon } from './day.styles';

const CircleIcon = ({
  circleWidthHeight,
  cicleCCyx,
  circleRadius,
  color
}) => /*#__PURE__*/React.createElement("svg", {
  height: circleWidthHeight,
  width: circleWidthHeight
}, /*#__PURE__*/React.createElement("circle", {
  cx: cicleCCyx,
  cy: cicleCCyx,
  r: circleRadius,
  fill: color
}));

const Day = ({
  statuses,
  events,
  number,
  isCurrentDay,
  activeColor,
  isActive,
  onClick,
  acceptedColor,
  pendingColor,
  rejectedColor,
  grey
}) => {
  const circleWidthHeight = 12;
  const cicleCCyx = circleWidthHeight / 2;
  const circleRadius = 3;
  const circleDefaultProps = {
    circleWidthHeight,
    cicleCCyx,
    circleRadius
  };
  const statusColors = {
    accepted: acceptedColor,
    pending: pendingColor,
    rejected: rejectedColor
  };

  const handleClick = () => onClick({
    day: number,
    events
  });

  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(DayCon, {
    onClick: handleClick,
    isCurrentDay: isCurrentDay,
    isActive: isActive,
    activeColor: activeColor,
    grey: grey
  }, number), /*#__PURE__*/React.createElement(StatusCon, null, statuses.map(item => /*#__PURE__*/React.createElement(CircleIcon, _extends({}, circleDefaultProps, {
    key: item,
    color: statusColors[item]
  })))));
};

Day.defaultProps = defaultProps;
Day.propTypes = propTypes;
export default memo(Day);