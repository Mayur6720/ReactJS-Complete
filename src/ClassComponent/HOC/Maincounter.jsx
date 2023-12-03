import React from 'react';
import { Component } from 'react';
import Clickcounter from './Clickcounter';
import Hovercounter from './Hovercounte';
class Maincounter extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Clickcounter/>
            <Hovercounter/>
            </>
        );
    }
}
 
export default Maincounter;