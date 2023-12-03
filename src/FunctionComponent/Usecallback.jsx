import React, { useCallback,useState,useMemo } from 'react';
import Callbackchild from './Callbackchild'


const Usecallback = () => {

    const [count,setcount] = useState(10)
    const [item,setitem] = useState(10)

    const data = useCallback(
        
        function data(){

        return (console.log("deta"))

    },[])

    const test = useMemo(function test(){
        console.log("test")
       return item * 3 ;
    },[item])

    return ( 
        <>
        <h1>UseCallback Hook</h1>
        <Callbackchild data = {data}/>
        <h2>UseMemo state</h2>
            <p>{count}</p>
            <p>{item}</p>
            <p>{test}</p>
            <button onClick={()=>setcount(count + 3)}>+</button>
            <button onClick={()=>setitem(item + 3)}>+</button>
        </> 

    );
}
 



export default Usecallback;