import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: "detailsstyles__Wrapper",
  componentId: "brnskp-0"
})(["background-color:var(--color-white);display:grid;grid-template-columns:auto 1fr;padding:var(--spacing-s);max-width:600px;grid-gap:var(--spacing-s);"]);
export const Rating = styled.div.withConfig({
  displayName: "detailsstyles__Rating",
  componentId: "brnskp-1"
})([""]);
export const InfoCon = styled.div.withConfig({
  displayName: "detailsstyles__InfoCon",
  componentId: "brnskp-2"
})(["display:grid;"]);
export const Location = styled.div.withConfig({
  displayName: "detailsstyles__Location",
  componentId: "brnskp-3"
})(["font-family:var(--font-secondary);font-size:14px;line-height:24px;color:rgba(31,32,65,0.5);align-self:flex-end;"]);
export const LocationIcons = styled.div.withConfig({
  displayName: "detailsstyles__LocationIcons",
  componentId: "brnskp-4"
})(["display:flex;justify-content:space-between;height:30px;"]);
export const ContactIcons = styled.div.withConfig({
  displayName: "detailsstyles__ContactIcons",
  componentId: "brnskp-5"
})(["display:grid;grid-gap:var(--spacing-s);grid-template-columns:auto auto;transform:translateY(-9px);"]);
export const NumReview = styled.div.withConfig({
  displayName: "detailsstyles__NumReview",
  componentId: "brnskp-6"
})(["font-family:var(--font-secondary);font-size:14px;line-height:24px;color:rgba(31,32,65,0.5);span{font-weight:bold;}"]);