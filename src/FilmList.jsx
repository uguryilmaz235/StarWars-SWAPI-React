import React, {Component} from 'react';
import FilmInfo from './FilmInfo';

class List extends Component {
    render() {
      
        const film = this.props.film;
       

            return(
    <div className="">        
        {
            film.map((f) => {
                console.log(f)
                return(
                    <div className="card text-white bg-dark mb-3" key={f.url}>
                    <div className="card-body">
                        <h5 className="card-title"> {f.title}</h5>
                         <p className="card-text">  <FilmInfo filmInfo = {f}/> </p>
                     </div>
              </div>
                   
                )
                })

        }
    </div>

        );
    }  
 }
export default List;