// Vendros
import styled from 'styled-components'; // Styles

export const ChatWrapper = styled.form.withConfig({
  displayName: "styles__ChatWrapper",
  componentId: "f2hv7x-0"
})(["position:relative;height:300px;overflow:hidden;"]);
export const ChatList = styled.div.withConfig({
  displayName: "styles__ChatList",
  componentId: "f2hv7x-1"
})(["height:100%;overflow:scroll;padding-bottom:50px;box-sizing:border-box;"]);
export const CurrentUserCompWrapper = styled.div.withConfig({
  displayName: "styles__CurrentUserCompWrapper",
  componentId: "f2hv7x-2"
})(["display:flex;justify-content:flex-start;"]);
export const OtherUserCompWrapper = styled.div.withConfig({
  displayName: "styles__OtherUserCompWrapper",
  componentId: "f2hv7x-3"
})(["display:flex;justify-content:flex-end;"]);
export const InputCompWrapper = styled.div.withConfig({
  displayName: "styles__InputCompWrapper",
  componentId: "f2hv7x-4"
})(["position:absolute;bottom:20px;left:0;right:0;margin:auto;display:flex;justify-content:center;"]);