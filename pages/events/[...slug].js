import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';

const FilteretedEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) return <p className="center">Loading...</p>;

  const [filteredYear, filteredMonth] = filterData;

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  if (isNaN(numYear) || isNaN(numMonth || numMonth < 1 || numMonth > 12)) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteretedEventsPage;
