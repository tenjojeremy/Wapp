/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState, memo } from 'react';
import { defaultProps, propTypes } from './propTypes';
import { ChatWrapper, ChatList, CurrentUserCompWrapper, OtherUserCompWrapper, InputCompWrapper } from './styles'; // Main

const Chat = ({
  senderIds,
  CurrentUserComp,
  OtherUserComp,
  onReachedTop,
  InputComp,
  wrapperStyles,
  messagesData,
  previousMessageData,
  fetchingPreviousMessageData,
  LoadingComp,
  inputCompStyles,
  onSubmit
}) => {
  // Refs
  const ChatList_Ref = useRef(null);
  const inputRef = useRef(null); // States

  const [inputMessageValue, setInputMessageValue] = useState(''); // Effects

  useEffect(() => {
    scrollToBottom();
    addEventListeners();
    return () => {
      removeEventListeners();
    };
  }, []); // Scroll to bottom when new messages are sent/reevided

  useEffect(() => {
    scrollToBottom();
  }, [messagesData]); // Functions

  const addEventListeners = () => {
    if (onReachedTop) {
      ChatList_Ref.current.addEventListener('scroll', handleScroll, true);
    }
  };

  const removeEventListeners = () => {
    ChatList_Ref.current.removeEventListener('scroll', handleScroll);
  };

  const scrollToBottom = () => ChatList_Ref.current.scrollTop = ChatList_Ref.current.scrollHeight;

  const handleScroll = () => {
    const reachedTop = ChatList_Ref.current.scrollTop === 0;
    if (reachedTop) onReachedTop();
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const submitConditions = inputMessageValue !== '';

    if (submitConditions) {
      onSubmit(inputMessageValue);
      setInputMessageValue('');
      inputRef.current.clearInput();
    }
  };

  const messageInputOnChange = message => setInputMessageValue(message);

  const loadMessages = data => data.map(msg => senderIds.includes(msg.userId) ? /*#__PURE__*/React.createElement(CurrentUserCompWrapper, {
    key: msg.id
  }, /*#__PURE__*/React.createElement(CurrentUserComp, msg)) : /*#__PURE__*/React.createElement(OtherUserCompWrapper, {
    key: msg.id
  }, /*#__PURE__*/React.createElement(OtherUserComp, msg)));

  return /*#__PURE__*/React.createElement(ChatWrapper, {
    styles: wrapperStyles,
    onSubmit: handleOnSubmit
  }, /*#__PURE__*/React.createElement(ChatList, {
    ref: ChatList_Ref
  }, loadMessages(previousMessageData), fetchingPreviousMessageData && /*#__PURE__*/React.createElement(LoadingComp, null), loadMessages(messagesData)), /*#__PURE__*/React.createElement(InputCompWrapper, null, /*#__PURE__*/React.createElement(InputComp, {
    ref: inputRef,
    styles: inputCompStyles,
    onChange: messageInputOnChange,
    onFocus: scrollToBottom
  })));
};

Chat.defaultProps = defaultProps;
Chat.propTypes = propTypes;
export default memo(Chat);