import React from 'react';
import moment from 'moment';
import { BorderlessTableOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import { useEventContext } from '../../contexts/EventContext';
import { EventItemDiv } from './styles';

export const EventItem = (event) => {
  let navigate = useNavigate();
  const { setCurrentEvent } = useEventContext();
  const { id, eventType, name, start_datetime } = event;
  const handleEventClick = () => {
    setCurrentEvent(event);
    navigate(`/${eventType}/${id}/event/`);
  };
  return (
    <EventItemDiv
      onClick={handleEventClick}
      className="flex items-center pointer"
    >
      <BorderlessTableOutlined className="x150" />
      <div className="ml2">
        <h3>{name}</h3>
        <p className="m0">Starts On: {moment(start_datetime).format('LLL')}</p>
      </div>
    </EventItemDiv>
  );
};
