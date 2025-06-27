"use client";
import Header from '@/components/1_Header/Header';
import CountdownTimer from '@/components/2_CountdownTimer/CountdownTimer';
import EventList from '@/components/3_EventList/EventList';
import DressCode from '@/components/4_DressCode/DressCode';
import RSVPForm from '@/components/5_RSVPForm/RSVPForm';
import QRCodeSection from '@/components/6_QRCodeSection/QRCodeSection';
import { events, dressCodeColors } from '@/utils/constants';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header
        title="Приглашение на свадьбу"
        subtitle="-24 сентября 2033-"
        names="Антон & Виктория"
      />
      
      <CountdownTimer
        title="До дня свадьбы осталось"
        timeRemaining="365 дней и 12 часов"
      />
      
      <EventList initialEvents={events} />
      
      <DressCode colors={dressCodeColors} />
      
      <RSVPForm deadline="1 сентября 2033 года" />
      
      <QRCodeSection />
    </div>
  );
}