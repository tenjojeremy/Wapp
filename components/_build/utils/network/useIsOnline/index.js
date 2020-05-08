import React, { useState, createContext, useContext, useEffect } from 'react';
export const IsOnlineContext = createContext(null);

const getOnlineStatus = () => {
  return typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean' ? navigator.onLine : true;
};

export const IsOnlineProvider = ({
  children
}) => {
  const [isOnline, setIsOnline] = useState(getOnlineStatus());

  const goOnline = () => setIsOnline(true);

  const goOffline = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);
  return /*#__PURE__*/React.createElement(IsOnlineContext.Provider, {
    value: {
      goOnline,
      goOffline,
      isOnline
    }
  }, children);
};
export default (() => useContext(IsOnlineContext));