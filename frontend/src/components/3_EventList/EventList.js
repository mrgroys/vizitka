import { useState } from 'react';
import EventItem from './EventItem';
import EventForm from './EventForm';
import baseStyles from './EventList.module.css';
import adminStyles from './EventList.admin.module.css';

export default function EventList({ initialEvents, isAdmin = false }) {
  const styles = isAdmin ? { ...baseStyles, ...adminStyles } : baseStyles;
  const [events, setEvents] = useState(initialEvents);
  
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.Programm}>
      <h1 className={styles.headers}>Программа нашего дня</h1>
      <div className={styles.contentEventList}>
        {events.map((event, index) => (
          <EventItem 
            key={index} 
            event={event} 
            onDelete={isAdmin ? () => deleteEvent(index) : null} 
          />
        ))}
      </div>
      {isAdmin && <EventForm onAdd={addEvent} />}
      <hr className={styles.border} />
    </div>
  );
}