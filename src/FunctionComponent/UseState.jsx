import React from 'react';
import { useState } from 'react';

const UseState = () =>{

    const [age,setage] = useState(10);
    const[text,settext] = useState("type");

    function increment (){
        return (
            setage(age + 2)
        )
    }
    function typing(e){
        return (
            settext(e.target.value)
        )
    }
    return(
        <>
        <h3>This is UseState Hooks</h3>
        <h4>your age : {age}</h4>
        <button onClick={increment}>+</button>
        <button onClick={increment}>+</button>
        <div>
        <input value={text} onChange={typing}/>
        <p> you are {text}</p>
        <button onClick = {()=>settext("reserted")}>new</button>
       </div>
        </>
    )
}

export default UseState