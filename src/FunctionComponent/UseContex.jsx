import React, { createContext } from 'react';
import Contex01 from './Contex01';
 

const firstname = createContext()


const UseContex = () => {

    
    return (
        <>
        <>UseContext Hook</>
        <firstname.Provider value="vishal">

        <Contex01 name="mayur"/>
        </firstname.Provider>
        </>
    )
}

export default UseContex
export {firstname}