import React, { useState } from 'react';
import { TimePicker, Button } from 'antd';
import axios from 'axios';

const UpdateTime = ({ query }) => {
  const [timeString, setTimeString] = useState('');

  const updateData = (timeString) => {
    const data = {
      arrival_time: timeString,
    };

    axios
      .put(
        `https://bv-online-assessment.herokuapp.com/api/bookings/${query}/update-eta`,
        data
      )
      .then((data) => {
        console.log(data);

        if (data.statusText === 'OK') {
          alert(
            'Updated Arrival Time (Retype your booking code to see changes)'
          );
        } else {
          alert('Error updating arrival time');
        }
      });
  };

  return (
    <>
      <p>{timeString}</p>
      <TimePicker
        // defaultValue={moment('00:00', 'HH:mm')}
        format="HH:mm"
        onChange={(time, timeString) => {
          setTimeString(timeString);
          console.log(time);
          console.log(timeString);
        }}
      />
      <Button type="primary" onClick={() => updateData(timeString)}>
        Submit
      </Button>
    </>
  );
};

export default UpdateTime;
