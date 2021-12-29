import React from "react";

const CharacterList = (props) => {
  //border-2 border-black
  return (
    <>
      <h2 className="col-span-1 row-span-1">{props.name}</h2>
      <h2 className="col-span-1 row-span-1">{props.eyeColor}</h2>
      <h2 className="col-span-1 row-span-1">{props.birthYear}</h2>
    </>
  );
};

export default CharacterList;
