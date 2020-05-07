import styled from 'styled-components';
const DAY_SIZE = '30px';
export const Wrapper = styled.div.withConfig({
  displayName: 'daystyles__Wrapper',
  componentId: 'vujxe1-0'
})(['display:grid;grid-auto-flow:row;']);
export const DayCon = styled.div.withConfig({
  displayName: 'daystyles__DayCon',
  componentId: 'vujxe1-1'
})(['width:', ';height:', ';border-radius:50%;display:flex;justify-content:center;align-items:center;color:black;font-size:14px;font-weight:500;justify-self:center;cursor:pointer;user-select:none;font-family:var(--font-primary);transition:.2s;&:active{background-color:', ';}', ' ', ' ', ''], DAY_SIZE, DAY_SIZE, ({
  activeColor
}) => activeColor ? 'var(--color-'.concat(activeColor, 'Background)') : 'rgba(0, 0, 0, 0.1)', ({
  activeColor,
  ...props
}) => isCurrentDay(props, '\n  background: transparent;\n  border: 2px solid '.concat(activeColor, ';\n  color: black;')), props => isGrey(props, '\n  background: transparent;\n  color: grey;'), ({
  activeColor,
  ...props
}) => isActive(props, '\n  background-color: '.concat(activeColor, ';\n  color: white;')));
export const StatusCon = styled.div.withConfig({
  displayName: 'daystyles__StatusCon',
  componentId: 'vujxe1-2'
})(['display:flex;justify-content:center;flex-direction:row;width:100%;']); // Variants

const isCurrentDay = ({
  isCurrentDay
}, styles) => isCurrentDay && styles;

const isGrey = ({
  grey
}, styles) => grey && styles;

const isActive = ({
  isActive
}, styles) => isActive && styles;