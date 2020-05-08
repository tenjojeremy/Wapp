import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "kchyep-0"
})(["position:relative;width:fit-content;height:fit-content;cursor:pointer;overflow:hidden;"]);
export const Input = styled.input.withConfig({
  displayName: "styles__Input",
  componentId: "kchyep-1"
})(["cursor:pointer;position:absolute;left:0;right:0;top:0;bottom:0;opacity:0;width:fit-content;height:100%;z-index:1;"]);
export const ChildrenWrap = styled.div.withConfig({
  displayName: "styles__ChildrenWrap",
  componentId: "kchyep-2"
})(["z-index:0;"]);