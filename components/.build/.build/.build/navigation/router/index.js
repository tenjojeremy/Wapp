import React from 'react';
import { BrowserRouter as BrowserRouterReactRouter, Route as RouteReactRouter, Redirect as RedirectReactRouter, Switch as SwitchReactRouter, Link as LinkReactRouter, useHistory as useHistoryReactRouter, useLocation as useLocationReactRouter } from 'react-router-dom';
import CustomAuthRoute from './authRoute'; // Components

export const BrowserRouter = props => /*#__PURE__*/React.createElement(BrowserRouterReactRouter, props);
export const Route = props => /*#__PURE__*/React.createElement(RouteReactRouter, props);
export const AuthRoute = props => /*#__PURE__*/React.createElement(CustomAuthRoute, props);
export const Redirect = props => /*#__PURE__*/React.createElement(RedirectReactRouter, props);
export const Switch = props => /*#__PURE__*/React.createElement(SwitchReactRouter, props);
export const Link = props => /*#__PURE__*/React.createElement(LinkReactRouter, props); // hooks

export const useHistory = useHistoryReactRouter;
export const useLocation = useLocationReactRouter;