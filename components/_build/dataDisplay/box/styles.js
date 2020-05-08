import styled from 'styled-components';
import system from '../../theme/system';
export const BoxWrapper = styled.div.withConfig({
  displayName: "styles__BoxWrapper",
  componentId: "b7p8ds-0"
})(["", " ", " ", " ", ""], system, ({
  size
}) => size && "\n  width: ".concat(size, ";\n  height: ").concat(size, ";\n  "), ({
  fullscreen
}) => fullscreen && "\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  ", ({
  sticky
}) => sticky && "\n    top: 0; \n    position: sticky; \n  ");