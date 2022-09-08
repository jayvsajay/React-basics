import React, { useEffect, useRef, useState } from 'react'

function Hootimer() {

    const [state,setState]=useState(0);
    const intervalRef=useRef();

    useEffect(()=>{

        intervalRef.current=setInterval(()=>{
            setState(prevState => prevState + 1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
        Hooer timer - {state}

        <button onClick={()=>clearInterval(intervalRef.current)}>Clear interval</button>
    </div>
  )
}

export default Hootimer