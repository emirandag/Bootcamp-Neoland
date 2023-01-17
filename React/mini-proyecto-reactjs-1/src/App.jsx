import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <>
        {character.status !== "Dead" ? 
        <div key={character.id}>
          <h2>name: {character.name}</h2>
          <img src={character.image} alt={character.name} />
          <h2>status: {character.status}</h2>
          <h3>origin: {character.origin.name}</h3>
        </div>
        : null}
        </>
      ))}
    </>
  );
};

export default App;
