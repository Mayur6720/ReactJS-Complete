import React from 'react';
import { Route,Routes } from 'react-router';
import Menu from './Menu';
import Intro from './Intro';

function Routes1(){
    return(
        <>
        <Routes>
            <Route to='/' element = {<Menu/>}>
            <Route to='Intro' element = {<Intro/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default Routes1