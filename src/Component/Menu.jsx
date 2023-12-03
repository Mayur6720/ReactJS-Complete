import React from 'react';
import { Link,Outlet } from 'react-router-dom';


function Menu(){
    return(
        <>
        <ul>
            <li>
            <Link to = 'Intro'><h2>Intro page</h2></Link>
            </li>
            <Outlet></Outlet>
        </ul>
        </>
    )
}

export default Menu