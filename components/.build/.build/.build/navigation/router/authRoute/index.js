import _extends from '@babel/runtime/helpers/extends';
import React, { useEffect, memo } from 'react';
import useAuth from '../../../authentication/useAuth';
import { Route, useHistory, Redirect } from '../index';

const AuthRoute = ({
  component,
  redirectUrl = '/account/login',
  children,
  ...rest
}) => {
  const {
    push
  } = useHistory();
  const {
    user
  } = useAuth();
  const components = component ? component() : children;
  const redirectProps = {
    to: {
      pathname: redirectUrl
    }
  };
  useEffect(() => {
    if (!user) push(redirectUrl);
  }, [user]);
  return /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
    render: () => user ? components : /*#__PURE__*/React.createElement(Redirect, redirectProps)
  }));
};

export default memo(AuthRoute);