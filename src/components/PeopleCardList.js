import React from "react";
import PeopleCard from "./PeopleCard";

const CardList = ({ items }) => {
  const cardArray = items.map((item, i) => {
    console.log(items[i]);
    return (
      <PeopleCard
        key={items[i].url}
        id={items[i].url}
        name={items[i].name}
        height={items[i].height}
        mass={items[i].mass}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
