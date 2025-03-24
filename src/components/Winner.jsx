function Winner({ winner, matchHistory }) {
  // Fonction pour grouper les matchs par phase
  const groupedMatches = matchHistory.reduce((acc, match) => {
    if (!acc[match.phase]) {
      acc[match.phase] = [];
    }
    acc[match.phase].push(match);
    return acc;
  }, {});

  return (
    <div className="winner">
      <h1>🏆 Le grand gagnant est {winner.name}! 🏆</h1>
      <img className="winner-image" src={winner.image} alt={winner.name} />
      
      <div className="match-history">
        <h2>Parcours de la victoire</h2>
        {Object.entries(groupedMatches).map(([phase, matches]) => (
          <div key={phase} className="phase-group">
            <h3 className="phase-title">{phase}</h3>
            {matches.map((match, index) => (
              <div key={index} className="match">
                <div className="match-details">
                  <div className="cat-info winner-info">
                    <img 
                      className="small-image" 
                      src={match.winner.image} 
                      alt={match.winner.name} 
                    />
                    <strong>{match.winner.name}</strong>
                  </div>
                  
                  <div className="versus">VS</div>
                  
                  <div className="cat-info">
                    <img 
                      className="small-image" 
                      src={match.loser.image} 
                      alt={match.loser.name} 
                    />
                    <span>{match.loser.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .winner {
          text-align: center;
          padding: 20px;
          color: #333;
        }
        
        .winner-image {
          max-width: 300px;
          border-radius: 10px;
          margin: 20px 0;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        
        .match-history {
          margin: 30px auto;
          max-width: 600px;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        h2 {
          color: #2c3e50;
          margin-bottom: 25px;
        }
        
        .phase-group {
          margin-bottom: 30px;
        }

        .phase-title {
          background: #3498db;
          color: white;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 15px;
          font-size: 1.2em;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .match {
          background: #f8f9fa;
          padding: 15px;
          margin: 10px 0;
          border-radius: 10px;
          border: 1px solid #e9ecef;
        }

        .match-details {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .cat-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          color: #495057;
        }

        .winner-info strong {
          color: #2ecc71;
          font-size: 1.1em;
        }

        .versus {
          font-weight: bold;
          color: #6c757d;
          background: #e9ecef;
          padding: 5px 10px;
          border-radius: 5px;
        }

        .small-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .winner-info .small-image {
          border-color: #2ecc71;
        }

        @media (max-width: 600px) {
          .match-details {
            flex-direction: column;
            gap: 10px;
          }
          
          .versus {
            margin: 5px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Winner; 