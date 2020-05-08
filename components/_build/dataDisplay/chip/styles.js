import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1i9gvx8-0"
})(["background-color:", ";color:", ";border-radius:100px;padding:2px 5px;display:grid;align-items:center;justify-contents:center;text-align:center;width:fit-content;grid-gap:var(--spacing-xxs);grid-template-columns:auto auto;user-select:none;cursor:pointer;border:2px solid transparent;transition:0.2s;&:active{border:2px solid ", ";}svg{fill:", ";}"], ({
  color
}) => "var(--color-".concat(color, "Background)"), ({
  color
}) => "var(--color-".concat(color, "Darker)"), ({
  color
}) => "var(--color-".concat(color, "Darker)"), ({
  color
}) => "var(--color-".concat(color, "Darker)"));
export const Text = styled.span.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1i9gvx8-1"
})(["color:", ";user-select:none;font-family:var(--font-secondary);font-style:normal;font-weight:bold;font-size:13px;line-height:normal;text-align:center;cursor:pointer;"], ({
  color
}) => "var(--color-".concat(color, "Darker)"));