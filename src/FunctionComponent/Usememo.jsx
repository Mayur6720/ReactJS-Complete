import React, { useMemo } from 'react';
import { useState } from 'react';

const UseMemo = () => {

    const [count,setcount] = useState(10)
    const [item,setitem] = useState(10)
    

const test = useMemo(function test(){
    console.log("test")
   return item * 3 ;
},[item])



    return ( 
        <>
            <h2>UseMemo state</h2>
            <p>{count}</p>
            <p>{item}</p>
            <p>{test}</p>
            <button onClick={()=>setcount(count + 3)}>+</button>
            <button onClick={()=>setitem(item + 3)}>+</button>
            
        </>
     );
}
 
export default UseMemo;