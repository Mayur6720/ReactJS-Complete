import React from 'react';
import { Component } from 'react';

class Listandkey extends Component {
    
    constructor(){
        super()

        this.state = {
            item : [1,2,3,4,5,6]
        }

    }
    add =() =>{
        this.setState({item : [10,2,3,4,5,6,9]})
}

    render() { 
        let items = this.state.item.map((list)=><li key={list.toString()}>{list}</li>)
        return (
            <>
            <h2>List and Key</h2>
            <ul>
                {items}
            </ul>
            <button onClick={this.add}>add number</button>
            </>
        );
    }
}
 
export default Listandkey;