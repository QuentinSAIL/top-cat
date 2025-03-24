function CatBracket({ currentPair, onVote }) {
  if (!currentPair || currentPair.length !== 2) {
    return (
      <div className="bracket">
        <h1>Chargement...</h1>
      </div>
    );
  }

  return (
    <div className="bracket">
      <h2>Quel chat préférez-vous ?</h2>
      <div className="matchup-container">
        <div className="matchup">
          <div className="cat-card" onClick={() => onVote(currentPair[0])}>
            <img src={currentPair[0].image} alt={currentPair[0].name} />
            <h3>{currentPair[0].name}</h3>
          </div>
          <div className="cat-card" onClick={() => onVote(currentPair[1])}>
            <img src={currentPair[1].image} alt={currentPair[1].name} />
            <h3>{currentPair[1].name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatBracket; 