import Image from 'next/image';
import Link from 'next/link';

const formattedAddress = (location) => location.replace(', ', '\n');
const exploreLink = (id) => `/events/${id}`;

const EventItem = (props) => {
  return (
    <li>
      <Image
        src={`/${props.image}`}
        alt={props.title}
        width={250}
        height={160}
      />
      <div>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <time>{props.date}</time>
        </div>
        <div>
          <address>{formattedAddress(props.location)}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink(props.id)}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
