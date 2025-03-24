import styles from '../styles/TournamentResume.module.css';

function TournamentResume({ matchHistory }) {
  const groupedMatches = matchHistory.reduce((acc, match) => {
    if (!acc[match.phase]) {
      acc[match.phase] = [];
    }
    acc[match.phase].push(match);
    return acc;
  }, {});

  return (
    <div className={styles.TournamentResume}>
      <div className={styles.matchHistory}>
        <h2>Résumé du tournoi</h2>
        {Object.entries(groupedMatches).map(([phase, matches]) => (
          <div key={phase} className={styles.phaseGroup}>
            <h3 className={styles.phaseTitle}>{phase}</h3>
            {matches.map((match, index) => (
              <div key={index} className={styles.match}>
                <div className={styles.matchDetails}>
                  <div className={`${styles.catInfo} ${styles.winnerInfo}`}>
                    <img 
                      className={styles.smallImage} 
                      src={match.winner.image} 
                      alt={match.winner.name} 
                    />
                    <strong>{match.winner.name}</strong>
                  </div>
                  
                  <div className={styles.versus}>VS</div>
                  
                  <div className={`${styles.catInfo} ${styles.loserInfo}`}>
                    <span>{match.loser.name}</span>
                    <img 
                      className={styles.smallImage} 
                      src={match.loser.image} 
                      alt={match.loser.name} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentResume; 