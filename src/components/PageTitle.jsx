import styles from '../styles/PageTitle.module.css';

function PageTitle() {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.stars}></div>
      <h1 className={styles.title}>
        <span className={styles.mainTitle}>Concours du</span>
        <span className={styles.highlight}>Plus Beau Chat</span>
        <div className={styles.pawPrints}>
          <span className={styles.paw}>🐾</span>
          <span className={styles.paw}>🐾</span>
          <span className={styles.paw}>🐾</span>
        </div>
      </h1>
    </div>
  );
}

export default PageTitle; 