import React from 'react';
import { Component } from 'react';
import Classcompoprops from './Classcompoprops';

class Compositionandinheritance extends Component {
    render() { 
        return (
            <>
            <h1>This is the composition and inheritance </h1>
            <Classcompoprops>
                <h3>This is props component</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolores explicabo aliquid.</p>
            </Classcompoprops>
            </>
        );
    }
}
 
export default Compositionandinheritance;