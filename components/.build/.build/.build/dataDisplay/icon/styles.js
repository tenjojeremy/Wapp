import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: 'styles__Wrapper',
  componentId: 'sc-1uiuueh-0'
})(['text-align:center;width:fit-content;display:grid;user-select:none;cursor:pointer;align-content:space-between;', ';'], ({
  label
}) => label && '    \n  grid-gap: var(--spacing-xxs);\n  justify-items: center;\n  ');
export const WrapperIcon = styled.div.withConfig({
  displayName: 'styles__WrapperIcon',
  componentId: 'sc-1uiuueh-1'
})(['display:flex;transition:0.3s;border-radius:100px;animation-timing-function:ease-out;padding:', ';&:active{background-color:rgba(0,0,0,0.1);}@media (hover:hover){&:hover{background-color:rgba(0,0,0,0.1);}&:active{background-color:rgba(0,0,0,0.5);}}', ' ', ' ', ' svg{color:', ';fill:', ';align-self:center;', ' ', ' ', ' ', ' ', ''], ({
  backgroundSize
}) => backgroundSize ? ''.concat(backgroundSize) : 'var(--spacing-xs, 10px)', ({
  backgroundColor
}) => !!backgroundColor && '\n    background-color: var(--color-'.concat(backgroundColor, ');    \n    border: 2px solid var(--color-').concat(backgroundColor, ');\n\n    &:active {\n    background-color: var(--color-').concat(backgroundColor, ');   \n    border: 2px solid var(--color-').concat(backgroundColor, ');\n    }\n\n    @media (hover: hover) {\n    &:hover {\n    background-color: var(--color-').concat(backgroundColor, ');   \n    border: 2px solid var(--color-').concat(backgroundColor, ');\n    }\n}\n  '), ({
  outlined,
  color
}) => outlined && '\n  border: 2px solid var(--color-'.concat(color, 'Darker);\n\n    &:active {\n    background-color: var(--color-').concat(color, 'Background);   \n    border: 2px solid var(--color-').concat(color, 'Darker);\n    }\n\n    @media (hover: hover) {\n    &:hover {\n    background-color: var(--color-').concat(color, 'Background);   \n    border: 2px solid var(--color-').concat(color, 'Darker);\n    }\n  '), ({
  plain
}) => plain && '     \n        width: auto;\n        height: auto;\n        padding: 0;\n        \n  &:active {\n    background-color: transparent;\n    border: none;    \n    }\n\n    @media (hover: hover) {\n      &:hover {\n    background-color: transparent;\n    border: none;    \n    }\n    }\n\n  ', ({
  color,
  dark
}) => color && !dark ? 'var(--color-'.concat(color, ')') : color && dark ? 'var(--color-'.concat(color, 'Darker)') : 'var(--color-white)', ({
  color,
  dark
}) => color && !dark ? 'var(--color-'.concat(color, ')') : color && dark ? 'var(--color-'.concat(color, 'Darker)') : 'var(--color-white)', ({
  width,
  size
}) => 'width: '.concat(width || size, ';'), ({
  height,
  size
}) => 'height: '.concat(height || size, ';'), ({
  noBackground
}) => noBackground && '    \n   width: auto;\n   ', ({
  outlined,
  color
}) => outlined && '\n         fill: var(--color-'.concat(color, 'Darker);\n  '), ({
  color,
  isStroke
}) => isStroke && '\n     fill: none;\n     stroke: var(--color-'.concat(color, ');     \n     '));