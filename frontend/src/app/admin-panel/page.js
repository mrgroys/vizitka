"use client";
import { useState } from 'react';
import Header from '@/components/1_Header/Header';
import CountdownTimer from '@/components/2_CountdownTimer/CountdownTimer';
import EventList from '@/components/3_EventList/EventList';
import DressCode from '@/components/4_DressCode/DressCode';
import RSVPForm from '@/components/5_RSVPForm/RSVPForm';
import QRCodeSection from '@/components/6_QRCodeSection/QRCodeSection';
import { events, dressCodeColors } from '@/utils/constants';
import styles from './page.module.css';

export default function Admin() {
  const [events, setEvents] = useState([
    { time: "16:00", item: "Сбор гостей", address: "ул. Ставропольская 123", color: "#DCC086" },
    { time: "17:00", item: "Выездная церемония", address: "ул. Павлова 3", color: "#DCC086" },
    { time: "17:30", item: "Праздничный ужин", address: "ул. Пушкина 5", color: "#DCC086" },
    { time: "23:30", item: "Завершение торжества", address: "", color: "#DCC086" }
  ]);

  return (
    <div className={styles.page}>
      <Header
        title="Приглашение на свадьбу"
        subtitle="-24 сентября 2033-"
        names="Антон & Виктория" isAdmin={true}
      />
      
      <CountdownTimer
        title="До дня свадьбы осталось"
        timeRemaining="365 дней и 12 часов"
      />
      
      <EventList initialEvents={events} isAdmin={true} />
      
      <DressCode colors={dressCodeColors} isAdmin={true} />

      <RSVPForm deadline="" isAdmin={true} />
      
      <QRCodeSection />
    </div>
  );
}