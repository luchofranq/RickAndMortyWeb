import React, { useEffect, useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';

function CharacterList({ onCharacterClick }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error al obtener los personajes:', error));
  }, []);

  return (
    <Grid columns={3}>
      {characters.map(character => (
        <Grid.Column key={character.id}>
          <Card
            image={character.image}
            header={character.name}
            onClick={() => onCharacterClick(character)} 
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default CharacterList;
