import _extends from "@babel/runtime/helpers/extends";
import React, { memo } from 'react';
import BottomScrollListener from '../../utils/scrolling/eventListeners/scrollEnd';
import { Wrapper } from './styles';
import { defaultProps, propTypes } from './propTypes';

const List = ({
  photoGrid,
  data,
  children,
  direction,
  onItemClick,
  ItemComponent,
  listItemDefinitions,
  repeat,
  autoColumns,
  overflows,
  minWidth,
  repeatOnMinWidth,
  onScrollEnd,
  ...styles
}) => {
  const dataLength = data.length;
  children = Array.isArray(children) ? children : [children];

  const loadWithItemComponent = () => data.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: item._id || item.id || index
  }, /*#__PURE__*/React.createElement(ItemComponent, _extends({
    item: item,
    index: index,
    onClick: () => onItemClick({
      item,
      index
    }),
    id: item._id || item.id || index,
    definitions: listItemDefinitions
  }, item))));

  const Main = scrollRef => /*#__PURE__*/React.createElement(Wrapper, _extends({
    ref: scrollRef,
    direction: direction,
    dataLength: dataLength,
    repeat: repeat,
    autoColumns: autoColumns,
    overflows: overflows,
    minWidth: minWidth,
    repeatOnMinWidth: repeatOnMinWidth,
    photoGrid: photoGrid
  }, styles), children && children.map((child, index) => /*#__PURE__*/React.createElement("li", {
    key: children.length + index
  }, child)), ItemComponent && loadWithItemComponent(), overflows && /*#__PURE__*/React.createElement("li", {
    className: "min"
  }));

  return onScrollEnd ? /*#__PURE__*/React.createElement(BottomScrollListener, {
    onBottom: onScrollEnd
  }, Main) : Main();
};

List.defaultProps = defaultProps;
List.propTypes = propTypes;
export default memo(List);