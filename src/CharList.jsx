import React, { Component } from "react";
import CharInfo from "./CharInfo";
import GetFilm from "./GetFilm";

class CharList extends Component {
  render() {
    const people = this.props.people;

    return (
      <div className="">
        {people.map(p => {
          console.log(p);
          return (
            <div className="card text-white bg-dark mb-3" key={p.url}>
              <div className="card-body">
                <h5 className="card-title"> {p.name}</h5>
                {/* 
                 <p>
                  {p.films.map(f => {
                    return <GetFilm films={f} />;
                  })}
                </p>
*/}

                <p className="card-text">
                  <CharInfo charInfo={p} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CharList;
