import React from "react";

const FilmCard = ({
  title,
  opening_crawl,
  director,
  episode_id,
  release_date
}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${episode_id}?200x200`} alt="films" />
      <div>
        <h2>{title} </h2>
        <p>{director}</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
};
export default FilmCard;
// <p>{opening_crawl} </p>
