import React from 'react';
// import Navbar from './Navbar'
import { Outlet } from 'react-router';

function Home(){
    return (
        <>
       {/* <Navbar/> */}
        <h1>
            This would be a home page
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ratione in debitis.</p>
        <Outlet/>
        </>
    )
}

export default Home