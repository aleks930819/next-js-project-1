import EventList from '@/components/events/event-list';
import { getAllEvents } from '@/dummy-data';

const Events = () => {
  const event = getAllEvents();

  return (
    <div>
      <EventList items={event} />
    </div>
  );
};

export default Events;
