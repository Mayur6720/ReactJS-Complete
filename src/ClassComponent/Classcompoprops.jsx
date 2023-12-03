import React from 'react';
import { Component } from 'react';

class Classcompoprops extends Component {
    render() { 
        return (
            <>
            <h2>Class Component Props</h2>
            <h3>Hello {this.props.data}</h3>
            <del>
                {this.props.children}
            </del>
            </>
        );
    }
}
 
export default Classcompoprops;