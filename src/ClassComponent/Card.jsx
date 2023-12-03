import React from 'react';
import { Component } from 'react';
import Maincard from './Maincard';
import {
    MDBRow,
    MDBCol,
   
  } from 'mdb-react-ui-kit';
class Card extends Component {
    
    render() { 
        return (
        <>
        <h3>this would be our Card</h3>
        <MDBRow sm="6">
            <MDBCol>
                <Maincard imgsrc="https://picsum.photos/id/237/200/300"/>
            </MDBCol>
        </MDBRow>
        
        </>
        );
    }
}
 
export default Card;