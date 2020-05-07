import styled from 'styled-components';
import Position from '../../utils/position/position.index';
import system from '../../theme/system';
export const Wrapper = styled.div.withConfig({
  displayName: 'styles__Wrapper',
  componentId: 'a7pgjv-0'
})(['', ' ', ''], system, ({
  position
}) => position && Position({
  position
}));
export const Other = styled.span.withConfig({
  displayName: 'styles__Other',
  componentId: 'a7pgjv-1'
})(['']);