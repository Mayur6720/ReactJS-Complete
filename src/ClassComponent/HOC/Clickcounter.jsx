import React from 'react';
import { Component } from 'react';
import Updatecomponent from './Hoc';
class Clickcounter extends Component {

    
    render() { 
        return (

            <>
            <h2>Clickcounter</h2>
            <h4>{this.props.zero}</h4>
            <h3>{this.props.title}</h3>
            <button onClick={this.props.counts}>plz upadate</button>
            </>
        );
    }
}
 
export default Updatecomponent(Clickcounter);