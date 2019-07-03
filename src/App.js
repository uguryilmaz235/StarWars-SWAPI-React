import React, {Component} from 'react';
import axios from 'axios';
import List from './List';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [], 
      film: [],
     
    }
    this.getPeople = this.getPeople.bind(this)
    this.getFilm = this.getFilm.bind(this)
  }

  getFilm(){
    return axios.get("https://swapi.co/api/films")
    .then((response) => {
      console.log(response.data.results);
      this.setState({film: response.data.results})
    })
  }
  getPeople(){
    return axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results);
      this.setState({people: response.data.results})
    })
  }

  componentDidMount(){
    this.getPeople()
    this.getFilm()
  }
  render() {
    const {people} = this.state;
        return(
<div className="App">
  <List people = {people}/>
     
     </div>
    );
  }
}

export default App;
