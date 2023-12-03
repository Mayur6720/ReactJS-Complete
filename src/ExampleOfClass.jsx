import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function ExampleOfClass(){
    return(
        <>
        <h1>
            <Link to="/example/classcomponent">class component</Link>
        </h1>

        <h1>
            <Link to="/example/FunctionComponent">Function Component</Link>
        </h1>
        <h1>
            <Link to="/example/HooksExample">Hooks Example</Link>
        </h1>
        <h1>
            <Link to="/example/Component">Component</Link>
        </h1>
    
        <Outlet></Outlet>
        </>
    )
}

export default ExampleOfClass