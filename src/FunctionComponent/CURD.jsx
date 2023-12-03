import React, { useState } from 'react';
import './CRUD.css'



// const Usestate = () => {

//     const[name , setName] = useState("")
//     const[data , setData] = useState([])

//    const adddata = () => {
        
//         if(name.length !== 0){
//             setData(newdata => [...newdata , name] )
//             console.log(data)
//             setName("")
            
//         }
//    }

//     return (
//         <>
//         <div className="container " title='Create Read Update Delete'>
//             <h4 className='headtext'>CRUD</h4>
//         <div>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <button onClick={adddata}>Add to List</button>
//         </div>
//         </div>
//         </>
//     )
// }























const UseState = () => {

    const[data , setdata] = useState("")
    const[store , setstore] = useState([])
  
    const adddata = () =>{
        console.log(data);
        if(data.length !== 0){
            setstore( alldata => [...alldata , data])
            setdata("")
            console.log(store)
        }
    }

    return (
        
        <>
        <div className="container ">
        <h4 className='headtext'>CRUD</h4>
            <input type="text" value = {data} onChange={(e) => setdata(e.target.value)}/>
            <button onClick={adddata}>Add</button>
        </div>

        {/* {
            store.map((i)=>
            <>
                <h3>{i}</h3>
                <button>Edit</button>
                <button>Delete</button>
            </>
            )

        } */}
        </>
    )
}

export default UseState