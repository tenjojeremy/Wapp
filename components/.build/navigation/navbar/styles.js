import styled from 'styled-components';
import Position from '../../utils/position/position.index';
import system from '../../theme/system';
export const Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1nnskax-0"
})(["", " ", ""], system, ({
  position
}) => position && Position({
  position
}));
export const Other = styled.span.withConfig({
  displayName: "styles__Other",
  componentId: "sc-1nnskax-1"
})([""]);