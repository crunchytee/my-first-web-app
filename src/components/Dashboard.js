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
      console.log(data.characters);
      setCharacters(data.characters);
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
        <div className="grid grid-cols-3 grid-rows-auto divide-y-2 divide-black divide-solid border-2 border-black">
          <div className="grid grid-cols-3 grid-rows-auto col-span-3 row-span-1">
            <h2 className="">Name </h2>
            <h2 className="">Eye Color</h2>
            <h2 className="">Birth Year</h2>
          </div>
          {characters.map((character, i) => (
            <CharacterList
              className="w-min h-min"
              key={character.id}
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
