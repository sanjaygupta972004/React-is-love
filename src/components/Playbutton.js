import { useState } from "react";
import "./Playbutton.css";
function Playbutton({children, onPause,onClick}){
    const [playing, setplaying]=useState(false) ;// in this line using  usestate,hook 
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
        <div>
        <button onClick={handleclick}>{children}:{playing ?'▶️':'⏸️'} </button>
        </div> 
    )
}
export default Playbutton