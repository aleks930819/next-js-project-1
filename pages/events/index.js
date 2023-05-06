import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';
import { getAllEvents } from '@/dummy-data';

const Events = () => {
  const event = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={event} />
    </>
  );
};

export default Events;
