import { useState } from "react"
import "./Addvideolistbyform.css"

function Addvideo(){
const [video,setvideo]= useState({
time:'3 month ago',
channel:'coder dost',
verified:true    
})

function handleclick(e){
console.log(e.target.name,e.target.value)
setvideo({...video,
   [e.target.name] : e.target.value })
}

    return(
<form>
    <input type="text" name="title" onChange={handleclick} placeholder="Title"></input>
    <input type="text" name="view" onChange={handleclick} placeholder="View"></input>
    <button
        onClick ={handleclick}
    ></button>
</form>
    )
}
export default Addvideo