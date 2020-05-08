import React, { cloneElement } from 'react';
import { UploadsProvider } from './Data/uploads.state';
const providers = [/*#__PURE__*/React.createElement(UploadsProvider, {
  key: 1
})];

const ProviderComposer = ({
  contexts,
  children
}) => contexts.reduceRight((kids, parent) => cloneElement(parent, {
  children: kids
}), children);

const ContextProvider = ({
  children
}) => /*#__PURE__*/React.createElement(ProviderComposer, {
  contexts: providers
}, children);

export default ContextProvider;