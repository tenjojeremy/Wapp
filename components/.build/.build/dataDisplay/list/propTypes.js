import PropTypes, { array, object, func, element, oneOf, number, string, bool } from 'prop-types';
export const defaultProps = {
  data: [],
  direction: 'column',
  ItemComponent: null,
  photoGrid: null,
  minWidth: 600,
  repeat: 3,
  repeatOnMinWidth: 3,
  gap: 'xs',
  padding: 'xs',
  overflows: null,
  listItemDefinitions: null,
  onItemClick: () => null,
  autoColumns: null,
  onScrollEnd: null,
  noPaddingTB: null,
  noPaddingSides: null
};
export const propTypes = {
  data: array.isRequired,
  direction: oneOf(['column', 'row', 'grid']),
  ItemComponent: PropTypes.oneOfType([object, func, element]),
  repeat: number,
  minWidth: number,
  repeatOnMinWidth: number,
  gap: string,
  padding: string,
  overflows: bool,
  photoGrid: bool,
  listItemDefinitions: object,
  onItemClick: func,
  onScrollEnd: func,
  noPaddingTB: bool,
  noPaddingSides: bool
};