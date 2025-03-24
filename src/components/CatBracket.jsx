function CatBracket({ currentPair, onVote }) {
  if (!currentPair || currentPair.length !== 2) {
    return <Loading />;
  }

  return (
    <div className="bracket">
      <h2>Quel chat préférez-vous ?</h2>
      <Matchup currentPair={currentPair} onVote={onVote} />
    </div>
  );
}

const Loading = () => (
  <div className="bracket">
    <h1>Chargement...</h1>
  </div>
);

const Matchup = ({ currentPair, onVote }) => (
  <div className="matchup-container">
    {currentPair.map(cat => (
      <CatCard key={cat.id} cat={cat} onVote={onVote} />
    ))}
  </div>
);

const CatCard = ({ cat, onVote }) => (
  <div className="cat-card" onClick={() => onVote(cat)}>
    <img src={cat.image} alt={cat.name} />
    <h3>{cat.name}</h3>
  </div>
);

export default CatBracket; 