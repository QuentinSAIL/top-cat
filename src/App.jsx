import { useState } from 'react';
import './App.css';
import CatBracket from './components/CatBracket';
import Winner from './components/Winner';

const cats = [
  { id: 1, name: "Luna", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRosMZwU_zwK4Nm-rw1l1VjRZykWWwSJg3Q&s" },
  { id: 2, name: "Milo", image: "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Oliver", image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjaGF0fGVufDB8fDB8fHww" },
  { id: 4, name: "Leo", image: "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, name: "Bella", image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 6, name: "Charlie", image: "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, name: "Lucy", image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 8, name: "Max", image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 9, name: "Lily", image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 10, name: "Simba", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 11, name: "Nala", image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 12, name: "Oscar", image: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 13, name: "Coco", image: "https://images.unsplash.com/photo-1596854372407-baba7fef6e51?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 14, name: "Ruby", image: "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 15, name: "Felix", image: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
  { id: 16, name: "Sophie", image: "https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNoYXR8ZW58MHx8MHx8fDA%3D" },
];

function App() {
  const [remainingCats, setRemainingCats] = useState([...cats]);
  const [currentPair, setCurrentPair] = useState([cats[0], cats[1]]);
  const [winner, setWinner] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [matchHistory, setMatchHistory] = useState([]);

  const getTournamentPhase = (round) => {
    if (round <= 8) return "8ème de finale";
    if (round <= 12) return "Quart de finale";
    if (round <= 14) return "Demi-finale";
    return "Finale";
  };

  const handleVote = (selectedCat) => {
    const loser = currentPair.find(cat => cat.id !== selectedCat.id);
    setMatchHistory([...matchHistory, {
      round: currentRound,
      phase: getTournamentPhase(currentRound),
      winner: selectedCat,
      loser: loser
    }]);

    const newRemainingCats = remainingCats.filter(cat => 
      !currentPair.some(pairCat => pairCat.id === cat.id)
    );

    newRemainingCats.push(selectedCat);
    setRemainingCats(newRemainingCats);

    if (newRemainingCats.length >= 2) {
      setCurrentPair([newRemainingCats[0], newRemainingCats[1]]);
      setCurrentRound(currentRound + 1);
    } else {
      setWinner(selectedCat);
    }
  };

  return (
    <div className="app">
      {!winner ? (
        <>
          <h2>{getTournamentPhase(currentRound)} - Match {currentRound}</h2>
          <CatBracket 
            currentPair={currentPair} 
            onVote={handleVote}
          />
        </>
      ) : (
        <Winner winner={winner} matchHistory={matchHistory} />
      )}
    </div>
  );
}

export default App;
