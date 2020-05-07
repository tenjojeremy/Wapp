import React from 'react';
import useUploads from './Data/uploads.state';
export default (() => {
  const {
    uploadsCreate,
    uploadRead,
    uploadsUpdate,
    uploadsDelete
  } = useUploads();

  const createItem = () => uploadsCreate({
    data: {
      id: 2,
      name: 'person 2',
      country: 'colombia'
    }
  });

  const readItem = () => uploadRead({
    id: 2
  });

  const updateItem = () => uploadsUpdate({
    id: 2,
    toUpdate: {
      name: 'person 200',
      country: 'canada'
    }
  });

  const deleteItem = () => uploadsDelete({
    id: 2
  });

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: createItem
  }, "Create"), /*#__PURE__*/React.createElement("button", {
    onClick: readItem
  }, "Read"), /*#__PURE__*/React.createElement("button", {
    onClick: updateItem
  }, "Update"), /*#__PURE__*/React.createElement("button", {
    onClick: deleteItem
  }, "Delete"));
});