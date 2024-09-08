import React, { useState  } from 'react';
import { Container } from 'semantic-ui-react'; 
import CharacterList from './components/CharacterList'; 
import CharacterDetail from './components/CharacterDetail'; 
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [showDetail, setShowDetail] = useState(false); 
  const [selectedCharacter, setSelectedCharacter] = useState(null); 

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setShowDetail(true);
  };

  const handleBackClick = () => {
    setShowDetail(false);
  };

  return (
    <Container>
      <h1>Rick and Morty App</h1>
      {!showDetail ? (
        <CharacterList onCharacterClick={handleCharacterClick} />
      ) : (
        <CharacterDetail character={selectedCharacter} onBackClick={handleBackClick} />
      )}
    </Container>
  );
}

export default App;
