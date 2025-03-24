import styles from '../styles/TournamentResume.module.css';

function TournamentResume({ matchHistory }) {
  const groupedMatches = groupMatchesByPhase(matchHistory);

  return (
    <div className={styles.TournamentResume}>
      <h2>Résumé du tournoi</h2>
      {Object.entries(groupedMatches).map(([phase, matches]) => (
        <MatchPhase key={phase} phase={phase} matches={matches} />
      ))}
    </div>
  );
}

const groupMatchesByPhase = (matchHistory) => {
  return matchHistory.reduce((acc, match) => {
    if (!acc[match.phase]) {
      acc[match.phase] = [];
    }
    acc[match.phase].push(match);
    return acc;
  }, {});
};

const MatchPhase = ({ phase, matches }) => (
  <div className={styles.phaseGroup}>
    <h3 className={styles.phaseTitle}>{phase}</h3>
    {matches.map((match, index) => (
      <MatchDetails key={index} match={match} />
    ))}
  </div>
);

const MatchDetails = ({ match }) => (
  <div className={styles.match}>
    <div className={styles.matchDetails}>
      <CatInfo cat={match.winner} className={styles.winnerInfo} />
      <div className={styles.versus}>VS</div>
      <CatInfo cat={match.loser} className={styles.loserInfo} />
    </div>
  </div>
);

const CatInfo = ({ cat, className }) => (
  <div className={`${styles.catInfo} ${className}`}>
    <img className={styles.smallImage} src={cat.image} alt={cat.name} />
    <strong>{cat.name}</strong>
  </div>
);

export default TournamentResume; 