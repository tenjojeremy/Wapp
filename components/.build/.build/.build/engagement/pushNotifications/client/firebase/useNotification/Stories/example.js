import React, { useEffect } from 'react';
import icon from '../../../../../../../public/logo-192.png';
import useNotifications from '../index';
import Store from './store';

const Child = () => {
  const {
    init,
    token,
    message,
    showNotification
  } = useNotifications();
  console.log(token);
  console.log(message);
  useEffect(() => {
    handleMessage();
  }, [message]);

  const handleMessage = () => {
    if (message) {
      const {
        notification: {
          title,
          body
        }
      } = message;
      const options = {
        icon,
        body
      };
      showNotification({
        title,
        options
      });
    }
  };

  return /*#__PURE__*/React.createElement('button', {
    onClick: () => init()
  }, 'Initialize');
};

export default (() => /*#__PURE__*/React.createElement(Store, null, /*#__PURE__*/React.createElement(Child, null)));