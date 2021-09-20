import { useContext, useEffect, useState } from "react";
import LoginContext from "../LoginContext";
import CharacterList from "./CharacterList";

const Dashboard = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getChars = async () => {
      const response = await fetch(
        "https://star-wars-character-search.glitch.me/api/characters"
      );
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    };
    getChars();
  }, []);
  const { authenticated, setAuthenticated } = useContext(LoginContext);
  return (
    <div className="">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block p-6">Welcome to the dashboard!</h1>
        <h2 className="block p-6">
          Authentication Status: {JSON.stringify(authenticated)}
        </h2>
        <div className="grid grid-rows-3 grid-cols-auto">
          {Object.values(characters).map((character, i) => (
            <CharacterList
              key={i}
              name={character.name}
              eyeColor={character.eyeColor}
              birthYear={character.birthYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
