import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-16miqf8-0"
})(["background-color:", ";width:", ";height:", ";border-radius:", ";transition:0.2s ease-in-out;display:flex;justify-content:center;align-items:center;*{border-radius:", ";}", ""], ({
  color
}) => "var(--color-".concat(color, ")"), ({
  size
}) => "".concat(size), ({
  size
}) => "".concat(size), ({
  radius
}) => "".concat(radius, "px"), ({
  radius
}) => "".concat(radius, "px"), ({
  paddedBorder
}) => paddedBorder && "\n  background-color: transparent;\n\n  * {\n    background-color: transparent;\n  }\n\n  img {\n    padding: 5px;\n    background-color: transparent;\n  }\n\n  ");