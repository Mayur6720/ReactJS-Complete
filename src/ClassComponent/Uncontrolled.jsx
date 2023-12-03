import React from 'react';
import { createRef } from 'react';
import { Component } from 'react';

export default class Uncontrolled extends Component {
    constructor(){
        super()
        this.input = createRef()
        this.input1 = createRef()
    }

    submit = (event) => {
        event.preventDefault()
        // console.log("mayur");
        console.log(this.input.current.value);
        console.log(this.input1.current.value);
    }

    render() { 
        return (
            <>
            <h3>Uncontrolled class component</h3>

            <form onSubmit={(event)=>this.submit(event)}>
                <input type= "text" ref={this.input} />
                <input type= "text" ref={this.input1}/>
                <input type="submit" value="SubmitUnconrolled" />
            </form>
            </>
        );
    }
}
 
