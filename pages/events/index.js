import { useRouter } from 'next/router';

import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';
import { getAllEvents } from '@/dummy-data';

const Events = () => {
  const event = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={event} />
    </>
  );
};

export default Events;
