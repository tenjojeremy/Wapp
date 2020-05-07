import styled from 'styled-components';
import system from '../../theme/system';
export const ImageWrapper = styled.div.withConfig({
  displayName: "styles__ImageWrapper",
  componentId: "sc-1c0sgdl-0"
})(["", " overflow:hidden;position:relative;display:grid;justify-content:center;align-items:center;", ";img[data-base64='true']{filter:blur(10px);}"], system, ({
  letterColor
}) => letterColor && "background-color: var(--color-".concat(letterColor, "Background)"));
export const InnerImage = styled.img.withConfig({
  displayName: "styles__InnerImage",
  componentId: "sc-1c0sgdl-1"
})(["position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(1);animation-name:blurOut;animation-duration:0.2s;@keyframes blurOut{from{filter:blur(10px);}to{filter:blur(none);}}"]);