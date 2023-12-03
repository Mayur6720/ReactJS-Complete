import React, { memo } from 'react';

const Callbackchild = (props) =>{
    console.log("child");
    return (
        <>
        <h2>Callback Child</h2>
        <h4>{props.data}</h4>
        </>
    )
}

export default memo(Callbackchild)