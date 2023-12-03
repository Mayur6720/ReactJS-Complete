import React from 'react';
import { Link } from 'react-router-dom';

import { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Classmenu extends Component {
    render() { 
        return (
            <>
            <ul>
                
                    <li><Link to="classcomponentintro"><h3>Classcomponent intro</h3></Link></li>
                    <li><Link to="classcompoprops"><h3>Classcompoprops</h3></Link></li>
                    <li><Link to="card"><h3>Card</h3></Link></li>
                    <li><Link to="maincard"><h3>Maincard</h3></Link></li>
                    <li><Link to = "classstate"><h3>Classstate</h3></Link></li>
                    <li><Link to = "uncontrolled"><h3>Uncontrolled</h3></Link></li>
                    <li><Link to = "controlled"><h3>Controlled</h3></Link></li>
                    <li><Link to = "conditionalrendering"><h3>Conditional rendering</h3></Link></li>
                    <li><Link to = "Listandkey"><h3>Lists and keys</h3></Link></li>
                    <li><Link to = "compositionandinheritance"><h3>Composition and inheritance</h3></Link></li>
                    <li><Link to = "Maincounter"><h3>Maincounter</h3></Link></li>
                    <Outlet></Outlet>
                
            </ul>
            </>
        );
    }
}
 
export default Classmenu;