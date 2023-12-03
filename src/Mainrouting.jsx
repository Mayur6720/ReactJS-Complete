import React, { Suspense, lazy } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter } from 'react-router-dom';
import Home from './home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import ExampleOfClass from './ExampleOfClass'
import DefaultLayout from './ClassComponent/HOC/DefaultLayout';
import Exercise from './Exercise';
import Routes from './Component/Routes';
const ClassRoutes = lazy(()=> import("./ClassComponent/ClassRoutes"))
const FunctionRoutes = lazy(()=> import("./FunctionComponent/FunctionRoutes"))
const Hooksroutes1 = lazy(()=>import("./HooksExample/Hooksroutes1"))

// import Mainrouting from './Mainrouting'


const Mainrouting  = createBrowserRouter([
    {
        path : "/",
        element: <><DefaultLayout><Home/></DefaultLayout></>
    },
    {
        path : "/about",
        element: <><DefaultLayout><AboutUs/></DefaultLayout></>
    },
    {
        path : "/contact",
        element: <><DefaultLayout><ContactUs/></DefaultLayout></>
    },
    {
        path : "/Exercise",
        element: <><DefaultLayout><Exercise/></DefaultLayout></>
    },
    {
        path : "/example",
        element: <><DefaultLayout><ExampleOfClass/></DefaultLayout></>,
        children:[
            {
                path : "Classcomponent/*",
                element:<Suspense fallback={<h2>Loading...</h2>}> <ClassRoutes/></Suspense>
            },
            {
                path : "FunctionComponent/*",
                element : <Suspense fallback = {<h2>Loading...</h2>}> <FunctionRoutes/></Suspense>
            },
            {
                path : "HooksExample/*",
                element : <Suspense fallback = {<h2>We gathering.....</h2>}><Hooksroutes1/></Suspense>
            },
            {
                path : "Component/*",
                element : <Routes/>
            }
        ]
    }
])

export default Mainrouting