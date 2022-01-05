import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import LayoutContent from '../../components/utility/layoutContent';
import IntlMessages from '../../components/utility/intlMessages';
import Search from '../components/Search';
import BookingDetails from '../components/BookingDetails';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(
    () => {
      const fetchItems = async () => {
        const result = await axios(
          `https://bv-online-assessment.herokuapp.com/api/bookings/${query}`
        );

        // console.log(result.data);

        setItems(result.data);
      };

      fetchItems();
    },
    [query]
  );

  return (
    <LayoutContentWrapper style={{ height: '100vh' }}>
      <LayoutContent style={{ textAlign: 'center' }}>
        <h1>Guest Page</h1>
        <br />
        <IntlMessages id="print.yourBookingCode" />
        <Search
          getQuery={(q) => {
            setQuery(q);
          }}
        />
        <br />
        <BookingDetails items={items} query={query} />
      </LayoutContent>
    </LayoutContentWrapper>
  );
};

export default App;
