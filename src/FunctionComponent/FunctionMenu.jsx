import React from 'react';
import { Link, Outlet} from 'react-router-dom';


export default function FunctionMenu (){
    return(
        <>
        <ul>
            <li><Link to ="FunctionIntro"><h3>FunctionIntro</h3></Link></li>
            <li><Link to ="FunctionProps"><h3>FunctionProps</h3></Link></li>
            <li><Link to ="UseState"><h3>UseState</h3></Link></li>
            <li><Link to ="UseEffect"><h3>UseEffect</h3></Link></li>
            <li><Link to ="Usememo"><h3>Usememo</h3></Link></li>
            <li><Link to ="Usecallback"><h3>Usecallback</h3></Link></li>
            <li><Link to ="UseRef"><h3>UseRef</h3></Link></li>
            <li><Link to ="UseContex"><h3>UseContex</h3></Link></li>
            <li><Link to ="CURD"><h3>CURD</h3></Link></li>
            <Outlet></Outlet>
            </ul>
        </>
    )
}