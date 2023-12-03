import React from 'react';
import Navbar from '../../Navbar'
import { Component } from 'react';

    class DefaultLayout extends Component { 
        componentDidMount(){
            
        }
        render() { 
            return (
                <>
                <Navbar />
                {this.props.children}
                </>
            );
        }
    }
     

export default DefaultLayout