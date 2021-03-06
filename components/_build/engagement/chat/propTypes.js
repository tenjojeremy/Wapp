import React from 'react';
import { func, array, arrayOf, object, shape, bool, string, number, oneOfType } from 'prop-types';
import Input from '../../input/form/textField/styles/1';
export const defaultProps = {
  senderIds: [],
  CurrentUserComp: ({
    message
  }) => /*#__PURE__*/React.createElement("div", null, message),
  OtherUserComp: ({
    message
  }) => /*#__PURE__*/React.createElement("div", null, message),
  onReachedTop: null,
  InputComp: Input,
  wrapperStyles: {},
  messagesData: [],
  previousMessageData: [],
  fetchingPreviousMessageData: false,
  LoadingComp: () => /*#__PURE__*/React.createElement("div", null, "Loading..."),
  onSubmit: null
};
export const propTypes = {
  senderIds: array,
  CurrentUserComp: func,
  OtherUserComp: func,
  onReachedTop: func,
  InputComp: object,
  wrapperStyles: object,
  messagesData: arrayOf(shape({
    id: oneOfType([string, number]),
    userId: oneOfType([string, number])
  })).isRequired,
  previousMessageData: arrayOf(shape({
    id: oneOfType([string, number]),
    userId: oneOfType([string, number])
  })).isRequired,
  fetchingPreviousMessageData: bool,
  LoadingComp: func,
  onSubmit: func
};