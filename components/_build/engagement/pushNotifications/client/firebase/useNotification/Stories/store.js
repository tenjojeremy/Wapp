import React, { cloneElement } from 'react';
import { NotificationsProvider } from '../index';
const providers = [/*#__PURE__*/React.createElement(NotificationsProvider, {
  key: 1,
  service: "firebase"
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