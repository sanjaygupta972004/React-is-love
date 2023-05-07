import { useState } from "react"
import "./Addvideolistbyform.css"

function Addvideo({addvideo}){
const [videos,setvideos]= useState({
time:'3 month ago',
channel:'coder dost',
verified:true    
})

function handlesubmit(e){
e.preventDefault();
addvideo(videos)
console.log(videos) 
}

function handleclick(e){
    console.log(e.target.name, e.target.value)
setvideos({...videos,
   [e.target.name] : e.target.value })
}

    return(
<form>
    <input type="text" name="title" onChange={handleclick} placeholder="Title"></input>
    <input type="text" name="view" onChange={handleclick} placeholder="View"></input>
    <button
        onClick ={handlesubmit}
    >OnAdd</button>
</form>
    )
}
export default Addvideo