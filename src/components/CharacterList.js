import React from "react";

const CharacterList = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.eyeColor}</h3>
      <h3>{props.birthYear}</h3>
    </div>
  );
};

export default CharacterList;
