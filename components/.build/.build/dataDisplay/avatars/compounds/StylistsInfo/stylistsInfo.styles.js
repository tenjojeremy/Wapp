import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: "stylistsInfostyles__Wrapper",
  componentId: "bn8819-0"
})(["width:", ";grid-gap:var(--spacing-xxs);display:grid;"], ({
  width
}) => "".concat(width, "px"));
export const StylistName = styled.span.withConfig({
  displayName: "stylistsInfostyles__StylistName",
  componentId: "bn8819-1"
})(["font-family:Quicksand;font-weight:bold;font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block;"]);