import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: 'styles__Wrapper',
  componentId: 'sc-18mv6ds-0'
})(['position:relative;word-break:break-word;overflow-y:auto;div{border-radius:9px;}', ' ', ''], ({
  src,
  backgroundColor,
  isLoading
}) => (!src || isLoading) && '\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--color-'.concat(backgroundColor, ');\n    border-radius: 9px;\n    padding: var(--spacing-s);\n  '), ({
  noAnimation
}) => !noAnimation && '\n    div {\n    transition: 0.2s;\n    transition-timing-function: ease-in-out;\n\n    &:active {\n      transform: scale(0.6);\n    }\n  }\n  ');