import { useState } from "react";
import "./Playbutton.css";
function Playbutton({message,children, onPause,onClick}){
    const [playing, setplaying]=useState(false) ;// don't used this approch lean nest tutorial
    function handleclick(e){
        e.stopPropagation()
        if(playing){
            onPause()  
        }
        else{
            onClick()
        }
        setplaying(!playing)

    }
    return(

        <div className="button">
        <button onClick={handleclick}>{children}:{playing ?'▶️':'⏸️'} </button>
        </div>
    
        
    )
}
export default Playbutton