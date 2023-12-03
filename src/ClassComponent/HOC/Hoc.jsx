import React from 'react';
import { Component } from 'react';

const Updatecomponent = Origancomponent => (
    class Newcomponent extends Component { 

        constructor (){
            super()
            this.state = {
                count : 1
            }
        }
        upadated = ()=>{
            this.setState(prevstate => ({count : prevstate.count * 5}))
        }

        render() { 
            return (
                
                <Origancomponent counts = {this.upadated} zero = {this.state.count} title = "Mayur"/>
            );
        }
    }
     
)

export default Updatecomponent