import React from 'react';
import { Component } from 'react';

export default class Conditionalrendering extends Component {
    constructor(){
        super()    
        this.state ={
            isLogin :true
        }
    }
    render() { 
         return this.state.isLogin && <h2>kill it</h2>

        //2 return this.state.isLogin ? <h2>True</h2> : <h2>False</h2>
        // let msg 

        //3 if (this.state.isLogin) {
        //     msg = <><h3>True value</h3></>
        // }
        // else{
        //     msg = <h3>False value</h3>
        // }
        // return msg
        // 4    if (this.state.isLogin) {
            //         return <h2>Welcome</h2>
            //     }
            //     else{
                //         return <h2>exited</h2>
                // }
                
    }
}
 
