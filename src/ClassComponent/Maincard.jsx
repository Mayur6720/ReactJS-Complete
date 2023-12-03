import React from 'react';
import { Component } from 'react';
import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
  } from 'mdb-react-ui-kit';
  
class Maincard extends Component {
   
    render() { 
        return (
            <>
    <MDBRow>
      <MDBCol sm='3'>
        <MDBCard>
        <MDBCardImage src={this.props.imgsrc}/>
        <MDBCardBody>
            <MDBCardTitle>
                This is a card
            </MDBCardTitle>
            <MDBCardText>
                This is car that have been taken as an example
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
            </>
        );
    }
}
 
export default Maincard;