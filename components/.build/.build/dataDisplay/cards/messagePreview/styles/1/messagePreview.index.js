import React from 'react';
import styled from 'styled-components';

const Item = ({ ...props
}) => props.skeleton ? /*#__PURE__*/React.createElement(WrapperSkeleton, {
  className: "skeletonAnimation"
}, /*#__PURE__*/React.createElement(ProfilePicSkeleton, null), /*#__PURE__*/React.createElement(Name, null, "name"), /*#__PURE__*/React.createElement(Message, null, "name"), /*#__PURE__*/React.createElement(Time, null, "name")) : /*#__PURE__*/React.createElement(Wrapper, {
  onClick: props.onClick,
  className: "hoverBackground"
}, /*#__PURE__*/React.createElement(ProfilePic, {
  src: props.profilePic,
  alt: props.name
}), /*#__PURE__*/React.createElement(Name, null, props.name), /*#__PURE__*/React.createElement(Message, null, props.message), /*#__PURE__*/React.createElement(Time, null, props.time));

const Wrapper = styled.div.withConfig({
  displayName: "messagePreviewindex__Wrapper",
  componentId: "sc-1m3452k-0"
})(["display:grid;grid-template-areas:'ProfilePic Name Time' 'ProfilePic Message Time';grid-template-columns:54px 1fr 50px;grid-column-gap:10px;width:100%;cursor:pointer;user-select:none;padding:var(--spacing-s);box-sizing:border-box;border-radius:2px;"]);
const WrapperSkeleton = styled(Wrapper).withConfig({
  displayName: "messagePreviewindex__WrapperSkeleton",
  componentId: "sc-1m3452k-1"
})(["grid-gap:var(--spacing-xs);> span{color:#eeeeee;background:#eeeeee;}"]);
const ProfilePic = styled.img.withConfig({
  displayName: "messagePreviewindex__ProfilePic",
  componentId: "sc-1m3452k-2"
})(["grid-area:ProfilePic;border-radius:100px;width:54px;"]);
const ProfilePicSkeleton = styled(ProfilePic).withConfig({
  displayName: "messagePreviewindex__ProfilePicSkeleton",
  componentId: "sc-1m3452k-3"
})(["height:54px;background:#eeeeee;"]);
const Name = styled.span.withConfig({
  displayName: "messagePreviewindex__Name",
  componentId: "sc-1m3452k-4"
})(["grid-area:Name;align-self:end;font-size:16px;padding-bottom:3px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]);
const Message = styled.span.withConfig({
  displayName: "messagePreviewindex__Message",
  componentId: "sc-1m3452k-5"
})(["grid-area:Message;align-self:start;font-size:14px;color:rgba(0,0,0,0.54);padding-top:3px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]);
const Time = styled.span.withConfig({
  displayName: "messagePreviewindex__Time",
  componentId: "sc-1m3452k-6"
})(["grid-area:Time;font-size:13px;align-self:center;justify-self:end;"]);
export default Item;