import styles from './CountdownTimer.module.css';

export default function CountdownTimer({ title, timeRemaining }) {
    return (
        <div className={styles.Timer}>
            <h1 className={styles.headers}>{title}</h1>
            <h1 style={{ fontSize: '40px' }}>{timeRemaining}</h1>
            <hr className={styles.border} />
        </div>
    );
}