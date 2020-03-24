import React from "react";
import FilmCard from "./FilmCard";

const FilmCardList = ({ items }) => {
  const cardArray = items.map((item, i) => {
    console.log(items[i]);
    return (
      <FilmCard
        key={items[i].episode_id}
        episode_id={items[i].episode_id}
        title={items[i].title}
        opening_crawl={items[i].opening_crawl}
        director={items[i].director}
        release_date={items[i].release_date}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default FilmCardList;
