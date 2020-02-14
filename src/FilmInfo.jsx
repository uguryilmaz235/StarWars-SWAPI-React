import React, { Component } from "react";
import GetCharacter from "./GetCharacter";
class FilmInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      counter: 0
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  open() {
    this.setState({ expanded: !this.state.expanded });
  }
  close() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const info = this.props.filmInfo;
    const DATE_OPTIONS = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    if (!this.state.expanded) {
      return (
        <p className="btn btn-info" onClick={this.open}>
          Show Info
        </p>
      );
    }

    return (
      <div className="border border-dark">
        <p className="btn btn-warning" onClick={this.close}>
          Hide Info
        </p>
        <ul>
          <li>
            {" "}
            <h2 className="char-name">
              Director: {info.director.toUpperCase()}
            </h2>
          </li>
          <li>
            <h2 className="char-name">
              Producer: {info.producer.toUpperCase()}
            </h2>
          </li>
          <li>
            <h2 className="char-name">Release date: {info.release_date}</h2>
          </li>
          <li>
            <h2>Characters</h2>

            {info.characters.map(c => {
              return <GetCharacter char={c} increment={this.increment()} />;
            })}
          </li>
        </ul>
      </div>
    );
  }
}
export default FilmInfo;
