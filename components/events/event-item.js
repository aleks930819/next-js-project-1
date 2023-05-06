import classes from './event-item.module.css';

import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/button';

const formattedAddress = (location) => location.replace(', ', '\n');
const exploreLink = (id) => `/events/${id}`;

const EventItem = (props) => {
  return (
    <li className={classes.item}>
      <Image
        src={`/${props.image}`}
        alt={props.title}
        width={250}
        height={160}
      />
      <div className={classes.content}>
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
      <div className={classes.actions}>
        <Button link={exploreLink(props.id)}>Explore Event</Button>
      </div>
    </li>
  );
};

export default EventItem;
