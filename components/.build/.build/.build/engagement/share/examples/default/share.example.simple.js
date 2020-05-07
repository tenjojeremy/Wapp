import React, { useState, Fragment } from 'react';
import ShareMockData from '../share.mockData';
import ShareInit from '../../functions/share.init';

const ShareExample = () => {
  // State
  const [resMsg, setresMsg] = useState(''); // Functions

  const useShareFun = async () => {
    const {
      errorMessage,
      success
    } = await ShareInit(ShareMockData);
    if (success) setresMsg('Share Successful');
    if (errorMessage) setresMsg(errorMessage);
  }; // Template


  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement('button', {
    onClick: useShareFun
  }, 'Share this'), resMsg);
};

export default ShareExample;