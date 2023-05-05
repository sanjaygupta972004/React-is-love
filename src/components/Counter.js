import { useState } from "react";

function Counter(){
    const [number,setNumber]= useState(0) // it is use state function, it is also called hook
function handleclick(){
setNumber(number+1)
//setNumber(Number=>number+2) //updating function which are use in update value
//setNumber(Number=>number+2)
console.log(number);
}
    return(
        <>
        <h1 style={{color:"green"}} >{number} </h1>
        <button onClick={handleclick}>add</button>
        </>
    )
}
export default Counter
