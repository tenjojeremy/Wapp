import styled from 'styled-components';
export const Wrapper = styled.ul.withConfig({
  displayName: 'styles__Wrapper',
  componentId: 'r0xa8b-0'
})(['list-style:none;margin:0;padding:0;text-indent:0;list-style-type:0;transition:0.2s;-webkit-overflow-scrolling:touch;box-sizing:border-box;display:grid;padding:', ';grid-gap:', ';grid-auto-flow:', ';', ' ', '  ', ''], ({
  padding,
  noPaddingTB,
  noPaddingSides
}) => noPaddingTB ? '0 var(--spacing-'.concat(padding, ')') : noPaddingSides ? 'var(--spacing-'.concat(padding, ') 0') : 'var(--spacing-'.concat(padding, ')'), ({
  gap
}) => 'var(--spacing-'.concat(gap, ')'), ({
  direction
}) => direction, ({
  overflows,
  dataLength
}) => overflows && '\n    overflow: auto;\n    overflow-y: hidden;\n    grid-template-columns: repeat('.concat(dataLength > 0 && dataLength, ', auto);\n    grid-template-rows: 100%;\n    justify-content: flex-start;\n\n    .min {\n      width: 0.1px;\n      opacity: 0;\n    }\n  '), ({
  grid,
  repeat,
  minWidth,
  repeatOnMinWidth
}) => grid && '\n      grid-auto-flow: row;\n      align-items: stretch;\n      grid-template-columns: repeat('.concat(repeat, ', minmax(10px, 1fr));\n\n  /* Min Width */\n  @media (min-width: ').concat(minWidth, 'px) {\n    grid-template-columns: repeat(').concat(repeatOnMinWidth, ', minmax(10px, 1fr));\n  }   \n    '), ({
  photoGrid,
  repeat,
  minWidth,
  repeatOnMinWidth
}) => photoGrid && '\n      grid-auto-flow: row;\n      align-items: stretch;\n      grid-template-columns: repeat('.concat(repeat, ', minmax(10px, 1fr));\n      \n      /* Min Width */\n  @media (min-width: ').concat(minWidth, 'px) {\n    grid-template-columns: repeat(').concat(repeatOnMinWidth, ', minmax(10px, 1fr));\n  }   \n  li > :first-child {\n    padding-top: 100%;\n    width: auto;\n    height: auto;    \n  }\n    '));