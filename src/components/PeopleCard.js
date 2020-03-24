import React from "react";

const PeopleCard = ({ name, height, mass, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name} </h2>
        <p>{height} cm</p>
        <p>{mass} kg</p>
      </div>
    </div>
  );
};
export default PeopleCard;
