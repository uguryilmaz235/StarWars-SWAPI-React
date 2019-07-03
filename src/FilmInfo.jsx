import React, {Component} from 'react';
import axios from 'axios';
class FilmInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            films: [],
        }
    }
}
render(){
    const info = this.props.chafInfo;
    return(
        <div className="">
            {
                (info.films).map((item)=>
                console.log(item)
                return axios.get(f)
                .then((response)=>{
                    console.log(response.data.results);
                }))
            }
        </div>
    )
}