import { useState } from 'react';
import baseStyles from './RSVPForm.module.css';
import adminStyles from './RSVPForm.admin.module.css';

export default function RSVPForm({ deadline, isAdmin = false }) {
  const styles = isAdmin ? { ...baseStyles, ...adminStyles } : baseStyles;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    attendance: '',
    guest: 0,
    children: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за ваш ответ!');
    setFormData({
      firstName: '',
      lastName: '',
      attendance: '',
      guest: amount,
      children: '',
      comments: ''
    });
  };

  const [amount, setAmount] = useState(0);

  const Minus = () => {
    if (amount >> 0) {
      setAmount(amount - 1)
    }
    else {setAmount(amount)}
  };

  const Plus = () => {
    setAmount(amount + 1)
  };

  return (
    <div className={styles.Confirmation}>
      <h1 className={styles.headers}>Подтверждение</h1>
      <div className={styles.content}>
        <p>
          Мы с нетерпением ждем встречи с вами! Пожалуйста, сообщите о 
          присутствии до {isAdmin && (<input className={styles.input} type="text" placeholder='Введите дату'/>)}{deadline}.
        </p>
        <form>
          <div className={styles.form}>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'grid' }}>
                <label>Имя *</label>
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Введите имя"
                  required
                />
              </div>

              <div style={{ display: 'grid', marginLeft: '20px' }}>
                <label>Фамилия *</label>
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Введите фамилию"
                  required
                />
              </div>
            </div>

            <div className={styles.part2}>
              <label>Будете ли вы присутствовать? *</label>
              {['Только на церемонии', 'Только на банкете', 'Да, на церемонии и на банкете', 'Нет'].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={formData.attendance === option}
                    onChange={handleChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className={styles.part3}>
              <label>Приведете ли вы с собой гостя?</label>
              <div className={styles.countGuests}>
                <button type="button" onClick={Minus} style={{ marginRight: "7px"}}
                  className={styles.buttonGuests}>-</button>
                <p>{amount}</p>
                <button type="button" onClick={Plus} style={{ marginLeft: "7px"}}
                  className={styles.buttonGuests}>+</button>
              </div>
            </div>

            <div className={styles.part4}>
              <label>
                Если у вас есть дети, вы придете с ними? Если да, укажите их количество и возраст
              </label>
              <input
                className={styles.input}
                type="text"
                name="children"
                value={formData.children}
                onChange={handleChange}
                placeholder="Введите текст"
              />
            </div>

            <div className={styles.part5}>
              <label>Комментарии и вопросы</label>
              <input
                className={styles.input}
                type="text"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Введите текст"
              />
            </div>

            <div>
              <button onClick={() => handleSubmit()} className={styles.button}>
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
      <hr className={styles.border} />
    </div>
  );
}