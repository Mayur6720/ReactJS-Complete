import React from 'react';
import { Route,Routes } from 'react-router';
import FunctionMenu from './FunctionMenu'
import FunctionIntro from './FunctionIntro';
import FunctionProps from './FunctionProps';
import UseState from './UseState';
import UseEffect from './UseEffect';
import Usememo from './Usememo';
import Usecallback from './Usecallback';
import UseRef from './UseRef';
import UseContex from './UseContex';
import CURD from './CURD';



 const FunctionRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={<FunctionMenu/>}>
                <Route path='/FunctionIntro' element={<FunctionIntro/>}></Route>
                <Route path='/FunctionProps' element={<FunctionProps/>}></Route>
                <Route path='/UseState' element={<UseState/>}></Route>
                <Route path='/UseEffect' element={<UseEffect/>}></Route>
                <Route path='/Usememo' element={<Usememo/>}></Route>
                <Route path='/Usecallback' element={<Usecallback/>}></Route>
                <Route path='/UseRef' element={<UseRef/>}></Route>
                <Route path='/UseContex' element={<UseContex/>}></Route>
                <Route path='/CURD' element={<CURD/>}></Route>
            </Route>
        </Routes>
        </>
    )
}

export default FunctionRoutes