import React, { useEffect, useLayoutEffect, useState } from 'react';


const UseState = () => {

    const [count,setcount] = useState(10); 
    useLayoutEffect(()=>{
     console.log("layout2")
 })

    
    useLayoutEffect(()=>{
        console.log("layout1")
    })
    useEffect(()=>{
        console.log("mayur");
    },[count])
    function increment(){
        return (
            setcount(count+2)
        )
   }
useLayoutEffect(()=>{
    console.log("layout3")
})

    return ( 
        <>
        <h2>your age is {count}</h2>
        <button onClick={increment}>+2</button>
        </>
     );
}
 
export default UseState