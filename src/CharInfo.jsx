import React, {Component} from 'react';


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
                    <li> <h4>gender: {info.gender }</h4></li>
                    <li><h2>Skin Color: {info.skin_color}</h2></li> 
                    <li><h2>Hair color: {info.hair_color}</h2></li> 
                    <li><h2>Mass: {info.mass}</h2></li> 
                    <li><h2>Mass: {info.mass}</h2></li> 
                    <li><h2>height: {info.height}</h2></li> 
                </ul>                  
               
                 
            </div>
        
        );
        
      
    }
}
export default CharInfo;