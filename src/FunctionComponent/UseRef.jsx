import React, { useRef } from 'react';

const UseRef = () => {

    const inputref = useRef(null)

    const inputdata = ()=>{
        return (console.log("inputdata"),
        console.log(inputref.current.value))
    }
    return (
        <>
        <h2>UseRef hook</h2>
        <input type="text" ref={inputref} />
        <button onClick={inputdata}>show text</button>
        </>
    )
}

export default UseRef