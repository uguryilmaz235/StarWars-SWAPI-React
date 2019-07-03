import React, {Component} from 'react';
class CharInfo extends Component {
   constructor(props) {
       super(props);
       this.state = {
           expanded:false,
       }
   }
        open(){
            this.setState({expanded: !this.state.expanded})
        }
        close(){
        this.setState({expanded: this.state.expanded})
        }
    render() {       
        const info = this.props.CharInfo; 
        return(
         <div></div>
        )
    }
}
export default CharInfo;