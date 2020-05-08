// Vendros
import styled from 'styled-components'; // Styles

export const ChatWrapper = styled.form.withConfig({
  displayName: "styles__ChatWrapper",
  componentId: "xasmn3-0"
})(["position:relative;height:300px;overflow:hidden;"]);
export const ChatList = styled.div.withConfig({
  displayName: "styles__ChatList",
  componentId: "xasmn3-1"
})(["height:100%;overflow:scroll;padding-bottom:50px;box-sizing:border-box;"]);
export const CurrentUserCompWrapper = styled.div.withConfig({
  displayName: "styles__CurrentUserCompWrapper",
  componentId: "xasmn3-2"
})(["display:flex;justify-content:flex-start;"]);
export const OtherUserCompWrapper = styled.div.withConfig({
  displayName: "styles__OtherUserCompWrapper",
  componentId: "xasmn3-3"
})(["display:flex;justify-content:flex-end;"]);
export const InputCompWrapper = styled.div.withConfig({
  displayName: "styles__InputCompWrapper",
  componentId: "xasmn3-4"
})(["position:absolute;bottom:20px;left:0;right:0;margin:auto;display:flex;justify-content:center;"]);