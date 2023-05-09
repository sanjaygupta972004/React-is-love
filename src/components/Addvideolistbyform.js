import { useState } from "react"
import "./Addvideolistbyform.css"
const intialvalue={
time:'3 month ago',
channel:'coder dost',
verified:true ,
title:"",
view:"",
}

function Addvideo({addvideo}){
const [videos,setvideos]= useState(intialvalue)

function handlesubmit(e){
e.preventDefault();
addvideo(videos)
setvideos(intialvalue)
}

function handleclick(e){
    console.log(e.target.name, e.target.value)
setvideos({...videos,
   [e.target.name] : e.target.value })
}

    return(
<form>
    <input type="text" name="title" onChange={handleclick} placeholder="Title" value={videos.title}></input>
    <input type="text" name="view" onChange={handleclick} placeholder="View" value={videos.view}></input>
    <button
        onClick ={handlesubmit}
    >OnAdd</button>
</form>
    )
}
export default Addvideo