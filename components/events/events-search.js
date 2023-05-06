import { useRef } from 'react';
import classes from './events-search.module.css';
import Button from './ui/button';

const monthsOptions = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'July' },
  { value: '7', label: 'June' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'Octomber' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];
const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearInputRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthInputRef}>
          {monthsOptions.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
