import baseStyles from './EventList.module.css';
import adminStyles from './EventList.admin.module.css';

export default function EventItem({ event, onDelete }) {
  const styles = onDelete ? { ...baseStyles, ...adminStyles } : baseStyles;

  return (
    <div style={{ marginBottom: '30px' }}>
      <div className={styles.eventList}>
        {onDelete && (
          <button className={styles.buttonDeleteEvent} onClick={onDelete}>×</button>
        )}
        <span>{event.time}</span>
        <div className={styles.circleEvent} style={{ backgroundColor: event.color }}></div>
        <span>{event.item}</span>
      </div>
      <div className={styles.address}>
        {event.address && <span>Адрес: {event.address}</span>}
      </div>
    </div>
  );
}