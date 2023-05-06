import styles from '@/styles/Home.module.css';

import { getFeaturedEvents } from '@/dummy-data';

import EventList from '@/components/events/event-list';

export default function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventList items={events} />
    </div>
  );
}
