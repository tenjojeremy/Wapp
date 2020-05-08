import React from 'react';
import useUploads from './Data/uploads.state';
export default (() => {
  const {
    uploads
  } = useUploads();
  return uploads.map(({
    id,
    name,
    country
  }) => /*#__PURE__*/React.createElement("p", {
    key: id
  }, name, " - ", country));
});