'use client';
import baseStyles from './Header.module.css';
import adminStyles from './Header.admin.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header({ title, subtitle, names, isAdmin = false }) {
    const styles = isAdmin ? { ...baseStyles, ...adminStyles } : baseStyles;
    const [valuenames, setValueNames] = useState(names);
    const [valuesubtitle, setValueSubtitle] = useState(subtitle);

    const router = useRouter();
    const Navigation = (path) => {
        router.push(path);
    };

    return (
        <div className={styles.Main}>
            {isAdmin && (
                <div className={styles.headButton}>
                    <button className={styles.adminButton}
                        onClick={() => Navigation('/')}>Главная</button>
                    <button className={styles.adminButton}
                        onClick={() => Navigation('/guests')}>Мои гости</button>
                    <button className={styles.buttonExit}
                        onClick={() => Navigation('/login')}>Выход</button>
                </div>
            )}
            <div className={styles.titleMain}>
                <h1 className={styles.title}>{title}</h1>
                {isAdmin ? (
                    <div className={styles.inputHeader}>
                        <input type="text"
                            className={styles.inputSubtitle}
                            value={valuesubtitle}
                            onChange={(e) => setValueSubtitle(e.target.value)}
                            placeholder='Введите дату'/>
                        <input type="text"
                            className={styles.inputNames}
                            value={valuenames}
                            onChange={(e) => setValueNames(e.target.value)}
                            placeholder='Введите имена'/>
                    </div>
                ) : (
                    <div>
                        <h1 className={styles.title}>{subtitle}</h1>,
                        <h1 style={{ fontSize: '48px', fontWeight: '500' }}>{names}</h1>
                    </div>
                )}
            </div>
        </div>
    );
}