import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: 'photostyles__Wrapper',
  componentId: 'bet0jl-0'
})(['background-color:var(--color-white);display:grid;grid-template-rows:1fr auto;position:relative;overflow:hidden;width:100%;height:100%;@media (min-width:600px){width:400px;padding-bottom:0;border-radius:10px;}']);
export const TopRow = {
  padding: 's',
  justifyContent: 'space-between',
  left: 0,
  right: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  zIndex: 1,
  gridAutoFlow: 'column'
};
export const ImageCon = styled.div.withConfig({
  displayName: 'photostyles__ImageCon',
  componentId: 'bet0jl-1'
})(['overflow:auto;position:relative;z-index:0;']);
export const LikeIconCon = styled.div.withConfig({
  displayName: 'photostyles__LikeIconCon',
  componentId: 'bet0jl-2'
})(['position:absolute;bottom:20px;right:20px;']);
export const donutStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 'auto'
};