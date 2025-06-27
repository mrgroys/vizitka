import { useState } from 'react';
import styles from './EventList.admin.module.css';

export default function EventForm({ onAdd }) {
  const [newEvent, setNewEvent] = useState({
    time: '', item: '', address: '', color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.time || !newEvent.item || !newEvent.color) {
      alert('Заполните время, описание и цвет события');
      return;
    }
    onAdd(newEvent);
    setNewEvent({ time: '', item: '', address: '', color: '' });
  };

  return (
    <div className={styles.contentAddEvent}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputEvent}
          type="text"
          name="time"
          value={newEvent.time}
          onChange={handleChange}
          placeholder="Время"
          required
        />
        <input
          className={styles.inputEvent}
          type="text"
          name="item"
          value={newEvent.item}
          onChange={handleChange}
          placeholder="Событие"
          required
        />
        <input
          className={styles.inputEvent}
          type="text"
          name="address"
          value={newEvent.address}
          onChange={handleChange}
          placeholder="Адрес"
        />
        <div style={{ position: 'relative' }}>
          <input
            className={styles.inputColorEvent}
            type="color"
            name="color"
            value={newEvent.color}
            onChange={handleChange}
            required
          />
          <button className={styles.customButton} style={{ backgroundColor: newEvent.color }}>
            Цвет пункта
          </button>
        </div>
        <button type="submit" className={styles.buttonAddEvent}>
          Добавить новое событие
        </button>
      </form>
    </div>
  );
}