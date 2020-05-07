import React, { memo, useEffect, useState, useRef } from 'react';
import List from '../../dataDisplay/list/index';
import Animation from '../../utils/animations/wap/index';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper, Other } from './styles';

const Autocomplete = ({
  inputStyle,
  data
}) => {
  const listRef = useRef(null);
  const [Textfield, setTextField] = useState(null);
  const [showList, setshowList] = useState(null);
  const [_data, setData] = useState(data);
  const hasData = _data.length > 0; // useEffect(() => {
  //   hasData
  // }, [_data])

  useEffect(() => {
    importTextfield();
  }, []);

  const importTextfield = async () => {
    let mod = await import('../form/textField/styles/'.concat(inputStyle));
    setTextField(mod.default({
      onInput: handleInput
    }));
  };

  const handleInput = value => {
    setshowList(value !== '');
  };

  return /*#__PURE__*/React.createElement(Wrapper, null, Textfield, /*#__PURE__*/React.createElement(Animation, {
    name: 'showHide',
    show: showList,
    el: listRef
  }), /*#__PURE__*/React.createElement('div', {
    ref: listRef,
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(List, {
    direction: 'row'
  }, /*#__PURE__*/React.createElement('span', null, 'hello'), /*#__PURE__*/React.createElement('span', null, 'hello'), /*#__PURE__*/React.createElement('span', null, 'hello'))));
};

Autocomplete.defaultProps = defaultProps;
Autocomplete.propTypes = propTypes;
export default memo(Autocomplete);