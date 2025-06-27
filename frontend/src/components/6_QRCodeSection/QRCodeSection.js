import Image from 'next/image';
import baseStyles from './QRCodeSection.module.css';
import adminStyles from './QRCodeSection.admin.module.css';
import { useState } from 'react';

export default function QRCodeSection({ isAdmin = false, onQRChange }) {
  const styles = isAdmin ? { ...baseStyles, ...adminStyles } : baseStyles;
  const [qrLink, setQrLink] = useState('https://localhost:3000');

  const handleLinkChange = (e) => {
    if (isAdmin) {
      setQrLink(e.target.value);
      onQRChange?.(e.target.value);
    }
  };

  return (
    <div className={styles.QRcode}>
      <div className={styles.content}>
        <div className={styles.telegram}>
          <p>Присоединяйтесь к нашему свадебному чату в телеграме!</p>
          {isAdmin && (
            <input
              type="text"
              value={qrLink}
              onChange={handleLinkChange}
              placeholder="Введите ссылку для QR-кода"
              className={styles.qrInput}
            />
          )}
        </div>
        <div className={styles.qrcodeimg}>
          <Image
            src="/qr-code.png"
            width={200}
            height={200}
            priority
            alt="QR код для чата в телеграме"
          />
          {isAdmin && <p className={styles.qrLink}>{qrLink}</p>}
        </div>
      </div>
    </div>
  );
}