import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Classmenu from './ClassMenu';
import { Component } from 'react';
import Classcomponentintro from './Classcomponentintro';
import Classcompoprops from './Classcompoprops';
import Card from './Card'
import Maincard from './Maincard';
import Classstate from './Classstate';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import Conditionalrendering from './Conditionalrendering';
import Listandkey from './Listandkey';
import Compositionandinheritance from './Compositionandinherirtance';
import Maincounter from './HOC/Maincounter';



class Classroutes extends Component {
    render() { 
        return (
            <>
            <Routes>
                <Route path='/' element={<Classmenu/>}>
                    <Route path='/classcomponentintro' element={<Classcomponentintro/>}></Route>
                    <Route path='/classcompoprops' element={<Classcompoprops/>}></Route>
                    <Route path='/card' element={<Card/>}></Route>
                    <Route path='/maincard' element={<Maincard/>}></Route>
                    <Route path = '/classstate' element ={<Classstate/>}></Route>
                    <Route path = '/uncontrolled' element ={<Uncontrolled/>}></Route>
                    <Route path = '/controlled' element ={<Controlled/>}></Route>
                    <Route path = '/conditionalrendering' element ={<Conditionalrendering/>}></Route>
                    <Route path = '/Listandkey' element ={<Listandkey/>}></Route>
                    <Route path = '/compositionandinheritance' element ={<Compositionandinheritance/>}></Route>
                    <Route path = '/Maincounter' element ={<Maincounter/>}></Route>
                </Route>
            </Routes>
            </>
        );
    }
}
 
export default Classroutes;