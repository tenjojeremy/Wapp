import React, { memo, useEffect, useState } from 'react';
import { defaultProps, propTypes } from './propTypes';
import { Wrapper, Other } from './styles';

const Dropdown = ({
  inputStyle
}) => {
  const [Textfield, setTextField] = useState(null);
  useEffect(() => {
    importTextfield();
  }, []);

  const importTextfield = async () => {
    let mod = await import("../form/textField/styles/".concat(inputStyle));
    setTextField(mod.default);
  };

  console.log(Textfield);
  return /*#__PURE__*/React.createElement(Wrapper, null, Textfield);
};

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;
export default memo(Dropdown);