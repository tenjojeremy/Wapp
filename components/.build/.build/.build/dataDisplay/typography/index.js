import React, { memo } from 'react';
import styled from 'styled-components';
import system from '../../theme/system';
import { defaultProps, propTypes } from './propTypes';

const defineTag = (tag, variant) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return 'p';

    default:
      return tag;
  }
};

const El = styled.span.withConfig({
  displayName: 'typography__El',
  componentId: 'sc-1q9tn6t-0'
})(['', ''], system);

const Typography = ({
  tag,
  variant,
  styles,
  onClick,
  text
}) => {
  const className = 'typography-'.concat(variant);
  const Tag = defineTag(tag, variant);
  return /*#__PURE__*/React.createElement(El, {
    as: Tag,
    styles: styles,
    className: className,
    onClick: onClick
  }, text);
};

Typography.defaultProps = defaultProps;
Typography.propTypes = propTypes;
export default memo(Typography);