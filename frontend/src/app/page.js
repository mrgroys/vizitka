"use client"
import Image from "next/image";
import QRcode from "./qr-code.png";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const haveEvents = [
        {time: "16:00", item: "Сбор гостей", address: "ул. Ставропольская 123", color: "#DCC086"},
        {time: "17:00", item: "Выездная церемония", address: "ул. Павлова 3", color: "#DCC086"},
        {time: "17:30", item: "Праздничный ужин", address: "ул. Пушкина 5", color: "#DCC086"},
        {time: "23:30", item: "Завершение торжества", address: "", color: "#DCC086"}
    ];

    const [events, setEvents] = useState(haveEvents);

  return (
    <div className={styles.page}>
      <div className={styles.Main}>
        <h1 className={styles.title}>Приглашение на свадьбу</h1>
        <h1 className={styles.title}>-24 сентября 2033-</h1>
        <h1 style={{fontSize: '48px', fontWeight: '500'}}>Антон & Виктория</h1>        
      </div>

      <div className={styles.Timer}>
        <h1 className={styles.headers}>До дня свадьбы осталось</h1>
        <h1 style={{fontSize: '40px'}}>365 дней и 12 часов</h1>
        <hr className={styles.border}/>        
      </div>

      <div className={styles.Programm}>
        <h1 className={styles.headers}>Программа нашего дня</h1>
        <div className={styles.contentEventList}>
          {events.map((event, index) => (
            <div key={index} style={{ marginBottom: '30px' }}>
              <div className={styles.eventList}>
                <span>{event.time}</span>
                <div className={styles.circleEvent} style={{ backgroundColor: event.color}}></div>
                <span>{event.item}</span>
              </div>
             <div className={styles.address}>
                {event.address && (
                  <span>Адрес: {event.address}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <hr className={styles.border}/>       
      </div>

      <div className={styles.DressCode}>
        <h1 className={styles.headers}>Дресс-код</h1>
        <div className={styles.content}>
          <p className={styles.dress}>Для нас самое главное ваше присутствие, но мы будем очень благодарны, если вы поддержите цветовую гамму нашей свадьбы!</p>
          <div className={styles.circleDressCode}>
            <div className={styles.circleColor} style={{ backgroundColor: "#555555"}}></div>
            <div className={styles.circleColor} style={{ backgroundColor: "#555555"}}></div>
            <div className={styles.circleColor} style={{ backgroundColor: "#555555"}}></div>
            <div className={styles.circleColor} style={{ backgroundColor: "#555555"}}></div>
            <div className={styles.circleColor} style={{ backgroundColor: "#555555"}}></div>
            <div className={styles.circleColor} style={{ backgroundColor: "#555555"}}></div>
            </div>
        </div>
        <hr className={styles.border}/>        
      </div>

      <div className={styles.Confirmation}>
        <h1 className={styles.headers}>Подтверждение</h1>
        <div className={styles.content}>
          <p>Мы с нетерпением ждем встречи с вами! Пожалуйста, сообщите о присутствии до 1 сентября 2033 года.</p>
          <form>
            <div className={styles.form}>

              <div style={{display: 'flex'}}>
                <div style={{display: 'grid'}}>
                  <label>Имя *</label>
                  <input className={styles.input}
                    type="text"
                    placeholder="Введите имя"
                    required/><br/>
                </div>

                <div style={{display: 'grid'}}>
                  <label>Фамилия *</label>
                  <input className={styles.input}
                    type="text"
                    placeholder="Введите фамилию"
                    required/><br/>
                </div>
              </div>

              <div className={styles.part2}>
                <label>Будете ли вы присутствовать? *</label>
                <label><input type="radio" name="choice" required/>Только на церемонии</label>
                <label><input type="radio"  name="choice" required/>Только на банкете</label>
                <label><input type="radio"  name="choice" required/>Да, на церемонии и на банкете</label>
                <label><input type="radio"  name="choice" required/>Нет</label>
              </div>

              <div className={styles.part3}>
                <label>Приведете ли вы с собой гостя?</label>
              </div>

              <div className={styles.part4}>
                <label>Если у вас есть дети, вы придете с ними? Если да, укажите их количество и возраст</label>
                <input className={styles.input} type="text" placeholder="Введите текст"/>
              </div>

              <div className={styles.part5}>
                <label>Комментарии и вопросы</label>
                <input className={styles.input} type="text" placeholder="Введите текст"/>
              </div>

              <div>
                <button type="submit" className={styles.button}>Отправить</button>
              </div>
            </div>
          </form>
        </div>
        <hr className={styles.border}/>       
      </div>

      <div className={styles.QRcode}>
        <div className={styles.content}>
          <div className={styles.telegram}>
            <p>Присоединяйтесь к нашему свадебному чату в телеграме!</p>
          </div>
          <div className={styles.qrcodeimg}>
            <Image
              src={QRcode}
              width={200}
              height={200}
              priority
            />
          </div>
        </div>       
      </div>
    </div>
  );
}