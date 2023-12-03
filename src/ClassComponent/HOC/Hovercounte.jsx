import React from 'react';
import { Component } from 'react';
import Updatecomponent from './Hoc';

class Hovercounter extends Component {

    constructor (){
        super()
        this.state = {
            count : 1
        }
    }
    upadated = ()=>{
        this.setState(prevstate => ({count : prevstate.count * 5}))
    }
    // reboot = () => {
    //     this.setState(decreament => ({count : decreament.count /5}))
    // }
    render() { 
        return (

            <>
            <h2>Clickcounter</h2>
            <h4>{this.props.zero}</h4>
            <button onMouseEnter={this.props.counts}>plz upadate</button>
            {/* <button onMouseLeave={this.reboot}>plz upadate</button> */}
            </>
        );
    }
}
 
export default Updatecomponent(Hovercounter);