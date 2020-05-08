import React, { useState, createContext, useContext } from 'react';
import Animation from '../../utils/animations/wap';
export const ToastContext = createContext(null);
export const ToastProvider = ({
  children
}) => {
  const [Toast, setToast] = useState(null);

  const showToast = async ({
    message = 'message',
    style = 1,
    type = 'success',
    background = 'black',
    foreground = 'white',
    location = 'center'
  }) => {
    let mod = await import("./styles/".concat(style));
    setToast(mod.default({
      background,
      type,
      foreground,
      message,
      location
    }));
  };

  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: {
      showToast
    }
  }, children, /*#__PURE__*/React.createElement(Animation, {
    name: "outmostIn",
    returnsOnEnd: true,
    style: {
      zIndex: 999
    },
    show: Toast
  }, Toast && Toast));
};
export default (() => useContext(ToastContext));