import { Breadcrumb, Card } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useEventContext } from '../contexts/EventContext';
import { useLoadingContext } from '../contexts/LoadingContext';
import { EVENT_DETAILS_API } from '../data/EndPoints';
import { makeApiCall } from '../utils/apiHelpers';
import moment from 'moment';

export const EventDetailsPage = () => {
  const { setLoading } = useLoadingContext();
  const { currentEvent, setCurrentEvent } = useEventContext();
  const { eventId, eventType } = useParams();

  useEffect(() => {
    if (!currentEvent.id) {
      setLoading(true);
      makeApiCall(EVENT_DETAILS_API(eventId), ({ events }) => {
        setLoading(false);
        setCurrentEvent({ eventType, ...events[0] });
      });
    }

    return () => setCurrentEvent({});
  }, []);

  return (
    <>
      <Breadcrumb separator=">" className="mb2">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item
          href={`/${currentEvent.eventType || eventType}/events`}
        >
          Events
        </Breadcrumb.Item>
        <Breadcrumb.Item>{currentEvent.id}</Breadcrumb.Item>
      </Breadcrumb>
      <Header className="uppercase flex items-center mb2">
        <h2 className="mb0">{currentEvent.name}</h2>
      </Header>
      <Card>
        <p>
          <span className="bold">Name:</span> {currentEvent.name}
        </p>
        <p>
          <span className="bold">Starts On:</span>{' '}
          {moment(currentEvent.start_datetime).format('LLL')}
        </p>
        <p>
          <span className="bold">Can you bet?:</span>{' '}
          {currentEvent.bet_allowed ? 'Yes' : 'No'}
        </p>
        <p>
          <span className="bold">Short Name:</span>{' '}
          {currentEvent.short_name || '-'}
        </p>
        <p>
          <span className="bold">Description:</span>{' '}
          {currentEvent.description || '-'}
        </p>
      </Card>
    </>
  );
};
