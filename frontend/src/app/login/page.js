import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h3 className={styles.h3}>Вход в панель Администратора</h3>
      <form>
        <div className={styles.login}>
          <label style={{ fontSize: '14px' }}>Логин</label><br/>
          <input className={styles.input}
            type="text"
            placeholder="Введите логин"
            required/><br/>

          <label style={{ fontSize: '14px' }}>Пароль</label><br/>
          <input className={styles.input}
            type="password"
            placeholder="Введите пароль"
            required/><br/>

          <button type="submit" className={styles.button}>Вход</button>   
        </div>
      </form>
    </div>
  );
}