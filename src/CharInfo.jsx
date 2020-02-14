import React, { Component } from "react";
import GetFilm from "./GetFilm";

class CharInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.setState({ expanded: !this.state.expanded });
  }
  close() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const info = this.props.charInfo;

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
            <h2 className="char-name">Gender: {info.gender.toUpperCase()}</h2>
          </li>
          <li>
            <h2 className="char-name">
              Skin Color: {info.skin_color.toUpperCase()}
            </h2>
          </li>
          <li>
            <h2 className="char-name">
              Hair color: {info.hair_color.toUpperCase()}
            </h2>
          </li>
          <li>
            <h2 className="char-name">Mass: {info.mass.toUpperCase()}</h2>
          </li>
          <li>
            <h2 className="char-name">Height: {info.height.toUpperCase()}</h2>
          </li>
          <h3>Films:</h3>

          <li>
            {info.films.map(f => {
              return <GetFilm films={f} />;
            })}
          </li>
        </ul>
      </div>
    );
  }
}
export default CharInfo;
