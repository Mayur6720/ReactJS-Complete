import React from 'react';
import { Component } from 'react';



export default class Classstate extends Component {
    constructor(){
        super()
        this.state = {
            count : 1,
            name : "Mayur",
            color : "red",
            img : "https://picsum.photos/id/7/200/300"
        }   
    }
    increment = ()=>{
        // console.log("mayur");
        this.setState(prevstate => ({count : prevstate.count * 5, name : "Marcel"}))
        
    }
    decrement = ()=>{
        this.setState({count : this.state.count / 5})
    }
    changecolor = ()=>{
        console.log("color");
        this.setState(color2 => ({color : color2.color = "blue"}))
    }
    changeimg = (img)=>{
        let imgpath = ""
        switch (img) {
            case 1:
                imgpath ="https://picsum.photos/id/237/200/300"
                break;
                case 2:
                    imgpath ="https://picsum.photos/id/23/200/300"
                break;
                case 3:
                    imgpath ="https://picsum.photos/id/27/200/300"
                break;
            default:
                break;
        }
        this.setState({img :imgpath})
    }
    
    render() { 
        return (
            <>
            <h1>This is the state component of the class</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <h3>{this.state.name}</h3>
            <div>
                <p style={{ color : this.state.color}}>
                    Change to color {this.state.color}
                </p>
                <button onClick={this.changecolor}>change color</button>
                </div>
                <img src={this.state.img} alt="car" />
                <button onClick={()=>this.changeimg(1)}>Show the dog</button>
                <button onClick={()=>this.changeimg(2)}>Show the another</button>
                <button on={()=>this.changeimg(3)}>Show the another</button>
            
            </>
        );
    }
}
 
