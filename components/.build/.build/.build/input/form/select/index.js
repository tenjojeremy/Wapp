import _extends from '@babel/runtime/helpers/extends';
import React, { memo, Fragment, useState, useRef } from 'react';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper, SelectStyle } from './styles';

const Select = ({
  data,
  initialValue,
  valueKey,
  labelKey,
  Item,
  onChange,
  ...itemProps
}) => {
  const selectedValueDefault = initialValue ? initialValue : data.length > 0 && valueKey === 'index' ? 1 : data[0][valueKey] || 0;
  const selectRef = useRef(null);
  const [selectedValue, setselectedValue] = useState(selectedValueDefault);

  const handleChange = () => {
    const {
      current: {
        value
      }
    } = selectRef;
    setselectedValue(value);
    onChange(value);
  };

  return /*#__PURE__*/React.createElement('div', {
    style: Wrapper
  }, /*#__PURE__*/React.createElement('select', {
    style: SelectStyle,
    ref: selectRef,
    onChange: handleChange
  }, data.map((item, index) => {
    const value = valueKey === 'index' ? index + 1 : item[valueKey];
    const label = labelKey === 'index' ? index + 1 : item[labelKey];
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement('option', {
      value: value
    }, label));
  })), /*#__PURE__*/React.createElement(Item, _extends({
    label: selectedValue
  }, itemProps)));
};

Select.defaultProps = defaultProps;
Select.propTypes = propTypes;
export default memo(Select);