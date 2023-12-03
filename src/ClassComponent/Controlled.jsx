import React from 'react';
import { Component } from 'react';
export default  class Controlled extends Component {
  constructor(){
    super()

    this.state = {
        name : ""
    }
  }
    submit = (event)=>{
        event.preventDefault()
        console.log("submit");
        console.log(this.state.name);
    }

    render() { 
        return (
            <>
            <h3>Controlled component of the class which is added by react</h3>

            <form onSubmit={(event)=>this.submit(event)}>
                <input type="text" value={this.state.name}
                onChange={(e)=>this.setState({name : e.target.value})}/>
                <input type="submit" value="SubmitControlled" />
            </form>
            </>
        );
    }
}
 
