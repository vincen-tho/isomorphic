import React from 'react';
import IntlMessages from '../../components/utility/intlMessages';
import UpdateTime from '../components/UpdateTime';
import { Avatar } from 'antd';

const BookingDetails = ({ items, query }) => {
  const customStyles = { color: 'black', fontWeight: 'bold' };

  const arrival =
    items.arrival_time == ''
      ? 'Please set your arrival time'
      : items.arrival_time;

  const isFound =
    query === items.booking_code ? (
      <>
        <Avatar src={items.profile_picture} size={120} />
        <br />
        <IntlMessages id="print.hi" />
        <a style={customStyles}> {items.guest_name}!</a>
        <br />
        <br />
        <IntlMessages id="print.thankYou" />
        <br />
        <br />
        <IntlMessages id="print.propertyName" />
        <p style={customStyles}>{items.property_name}</p>
        <br />
        <IntlMessages id="print.checkInDate" />
        <p style={customStyles}>{items.check_in_date}</p>
        <br />
        <IntlMessages id="print.checkOutDate" />
        <p style={customStyles}>{items.check_out_date}</p>
        <br />
        <IntlMessages id="print.arrivalTime" />
        <p style={customStyles}>{arrival}</p>
        <UpdateTime query={query} />
      </>
    ) : (
      ''
    );

  return <div>{isFound}</div>;
};

export default BookingDetails;
