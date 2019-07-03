import React, {Component} from 'react';
class FilmInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            expanded:false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open(){
        this.setState({expanded: !this.state.expanded})
        }
        close(){
        this.setState({expanded: !this.state.expanded})
        }



    render(){
        const info = this.props.filmInfo;
        if(!this.state.expanded){
            return<p className = "btn btn-info" onClick= {this.open} >
                Show Info
            </p>
        }
   
        return(
              <div className="">
              
            
                <p className="btn btn-warning" onClick={this.close}>Hide Info</p>
                <ul>
                    <li> <h4>director: {info.director }</h4></li>
                    <li><h2>producer: {info.producer}</h2></li> 
            <li><h2>release_date: {info.release_date}</h2></li> 
                </ul>                  
               
                 
            </div>
        );
     }
}
export default FilmInfo;