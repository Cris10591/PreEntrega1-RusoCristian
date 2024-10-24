import { useState } from "react"

export default function ItemCount(){


    const [contador, setContador]= useState(0);
    const handleClickInc =()=>{
        setContador(contador+1)
    }
    const handleClickDec =()=>{
        if(contador>1){
        setContador(contador-1)
    }
    }
    
    return(
        <>
        <h3>Counter</h3>
       
        <button onClick={handleClickInc}>+</button>
        <p>{contador}</p>
        <button onClick={handleClickDec}>-</button>
        </>
    )
}