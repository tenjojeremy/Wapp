import React from 'react';
import { storiesOf } from '@storybook/react';
import filter from './functions/array.func';

const ArrayofStrings = () => {
  const dataset = ['1', '2', '3'];
  const result = filter(dataset);
  return /*#__PURE__*/React.createElement(React.Fragment, null, 'Result: ', result);
};

storiesOf('Misc-Utils|Array/Filter', module).add('Array of Strings', () => /*#__PURE__*/React.createElement(ArrayofStrings, null));