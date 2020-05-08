import React, { memo } from 'react';
import Buttom from '../../../../input/button/styles/base';
import { defaultProps, propTypes } from './emptyPage.propTypes';
import { Wrapper, InnerWrapper, Title } from './emptyPage.styles';

const EmptyPage = ({
  image,
  title,
  buttonText,
  redUrl,
  router
}) => {
  const {
    push
  } = router;

  const redirect = () => push(redUrl);

  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(InnerWrapper, null, image, /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(Buttom, {
    href: redUrl,
    text: buttonText,
    onClick: redirect,
    style: {
      width: 250
    }
  })));
};

EmptyPage.defaultProps = defaultProps;
EmptyPage.propTypes = propTypes;
export default memo(EmptyPage);