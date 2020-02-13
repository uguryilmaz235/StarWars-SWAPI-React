import React, { Component } from "react";
import axios from "axios";

class GetFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnData: "",
      fims: this.props.films
    };
    this.getFilm = this.getFilm.bind(this);
  }
  //   console.log(response.data.results);
  //   this.setState({ film: response.data.results });

  getFilm(element) {
    return axios.get(element).then(response => {
      console.log(response.data.title);
      this.setState({
        returnData: response.data.title
      });
    });
  }
  componentDidMount() {
    this.getFilm(this.props.films);
  }
  render() {
    const { returnData } = this.state;
    return <div className="films">{returnData}</div>;
  }
}
export default GetFilm;
