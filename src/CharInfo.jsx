import React, {Component} from 'react';
import axios from 'axios';

class CharInfo extends Component {
   constructor(props) {
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
       

    
    render() {       
        const info = this.props.charInfo; 
       
     
            
        if(!this.state.expanded){
            return<p className = "btn btn-info" onClick= {this.open} >
                Show Info
            </p>
        }
        
        return(
            
          
            <div className="">
              
            
                <p className="btn btn-warning" onClick={this.close}>Hide Info</p>
                <ul>
                    <li> <h4>Films: {info.films }</h4></li>
                    <li><h2>Birth date: {info.birth_year}</h2></li> 
            <li><h2>Hair color: {info.hair_color}</h2></li> 
                </ul>                  
               
                 
            </div>
        
        );
        
      
    }
}
export default CharInfo;