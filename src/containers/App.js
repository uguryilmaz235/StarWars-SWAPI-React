import React, { Component } from "react";
import PeopleCardList from "../components/PeopleCardList";
import FilmCardList from "../components/FilmCardList";
import "../containers/App.css";
import axios from "axios";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      films: []
    };
    // console.log("constructor");
  }
  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(response => {
      console.log(response.data.results);
      this.setState({ people: response.data.results });
    });
    axios.get("https://swapi.co/api/films").then(response => {
      console.log(response.data.results);
      this.setState({ films: response.data.results });
    });
    // this.setState({ robots: robots });
    // console.log("componentDidMount");
  }

  render() {
    const { people, films } = this.state;

    return (
      <div className="tc">
        <h1 className="center f1">STAR WARS</h1>
        <h2>Characters</h2>
        <div className="fl">
          <PeopleCardList className="outline w-25 pa3 mr2" items={people} />
        </div>
        <h2>Films</h2>
        <div className="fr">
          <FilmCardList className="outline w-25 pa3 mr2" items={films} />
        </div>
      </div>
    );
  }
}
export default App;
