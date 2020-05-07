//Vendors
import React, { memo } from 'react';
import { Wrapper, Time, Name, Address } from './appointment.styles';

const Appointment = () => {
  //Template
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: 'hoverBackground'
  }, /*#__PURE__*/React.createElement(Time, null, '2:00pm'), /*#__PURE__*/React.createElement(Name, null, 'Hayle Whitehead'), /*#__PURE__*/React.createElement(Address, null, '500 W 12th Ave'));
};

export default memo(Appointment);