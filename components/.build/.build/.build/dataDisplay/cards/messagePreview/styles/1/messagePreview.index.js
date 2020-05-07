import React from 'react';
import styled from 'styled-components';

const Item = ({ ...props
}) => props.skeleton ? /*#__PURE__*/React.createElement(WrapperSkeleton, {
  className: 'skeletonAnimation'
}, /*#__PURE__*/React.createElement(ProfilePicSkeleton, null), /*#__PURE__*/React.createElement(Name, null, 'name'), /*#__PURE__*/React.createElement(Message, null, 'name'), /*#__PURE__*/React.createElement(Time, null, 'name')) : /*#__PURE__*/React.createElement(Wrapper, {
  onClick: props.onClick,
  className: 'hoverBackground'
}, /*#__PURE__*/React.createElement(ProfilePic, {
  src: props.profilePic,
  alt: props.name
}), /*#__PURE__*/React.createElement(Name, null, props.name), /*#__PURE__*/React.createElement(Message, null, props.message), /*#__PURE__*/React.createElement(Time, null, props.time));

const Wrapper = styled.div.withConfig({
  displayName: 'messagePreviewindex__Wrapper',
  componentId: 'zvcv4o-0'
})(["display:grid;grid-template-areas:'ProfilePic Name Time' 'ProfilePic Message Time';grid-template-columns:54px 1fr 50px;grid-column-gap:10px;width:100%;cursor:pointer;user-select:none;padding:var(--spacing-s);box-sizing:border-box;border-radius:2px;"]);
const WrapperSkeleton = styled(Wrapper).withConfig({
  displayName: 'messagePreviewindex__WrapperSkeleton',
  componentId: 'zvcv4o-1'
})(['grid-gap:var(--spacing-xs);> span{color:#eeeeee;background:#eeeeee;}']);
const ProfilePic = styled.img.withConfig({
  displayName: 'messagePreviewindex__ProfilePic',
  componentId: 'zvcv4o-2'
})(['grid-area:ProfilePic;border-radius:100px;width:54px;']);
const ProfilePicSkeleton = styled(ProfilePic).withConfig({
  displayName: 'messagePreviewindex__ProfilePicSkeleton',
  componentId: 'zvcv4o-3'
})(['height:54px;background:#eeeeee;']);
const Name = styled.span.withConfig({
  displayName: 'messagePreviewindex__Name',
  componentId: 'zvcv4o-4'
})(['grid-area:Name;align-self:end;font-size:16px;padding-bottom:3px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;']);
const Message = styled.span.withConfig({
  displayName: 'messagePreviewindex__Message',
  componentId: 'zvcv4o-5'
})(['grid-area:Message;align-self:start;font-size:14px;color:rgba(0,0,0,0.54);padding-top:3px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;']);
const Time = styled.span.withConfig({
  displayName: 'messagePreviewindex__Time',
  componentId: 'zvcv4o-6'
})(['grid-area:Time;font-size:13px;align-self:center;justify-self:end;']);
export default Item;