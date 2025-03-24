import styles from '../styles/Podium.module.css';

const Podium = ({ winner, secondPlace, thirdPlace }) => {
  return (
    <div className={styles.podiumContainer}>
      <h2 className={styles.podiumTitle}>🏆 Podium Final 🏆</h2>
      <div className={styles.podium}>
        {/* Second Place */}
        <div className={`${styles.podiumSpot} ${styles.secondPlace}`}>
          <div className={styles.rank}>2</div>
          <img src={secondPlace.image} alt={secondPlace.name} className={styles.catImage} />
          <div className={styles.catName}>{secondPlace.name}</div>
        </div>

        {/* First Place */}
        <div className={`${styles.podiumSpot} ${styles.firstPlace}`}>
          <div className={styles.crown}>👑</div>
          <div className={styles.rank}>1</div>
          <img src={winner.image} alt={winner.name} className={styles.catImage} />
          <div className={styles.catName}>{winner.name}</div>
        </div>

        {/* Third Place */}
        <div className={`${styles.podiumSpot} ${styles.thirdPlace}`}>
          <div className={styles.rank}>3</div>
          <img src={thirdPlace.image} alt={thirdPlace.name} className={styles.catImage} />
          <div className={styles.catName}>{thirdPlace.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Podium; 