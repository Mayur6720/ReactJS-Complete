import React from 'react';

import { firstname } from './UseContex';
const Contex03 = (props) => {
    return (
        <>
            <h2>Contex 03</h2>
            <h4>{props.name}</h4>

            <firstname.Consumer>
                {
                    (name)=>{
                        return <h4>{name}</h4>
                    }
                }
            </firstname.Consumer>
        </>
    )
}

export default Contex03