import React, { Component } from "react";
import axios from "axios";

class GetCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnData: "",
      char: this.props.char
    };
    this.getChar = this.getChar.bind(this);
  }

  getChar(element) {
    return axios.get(element).then(response => {
      console.log(response.data.name);

      this.setState({
        returnData: response.data.name
      });
    });
  }

  componentDidMount() {
    this.getChar(this.props.char);
  }
  render() {
    const { returnData } = this.state;
    // var { counter } = this.state;
    return (
      <div className="char">
        <p>{returnData}</p>
      </div>
    );
  }
}
export default GetCharacter;
