
import "./App.css"
import videodb from "./Data/datadb";
import Counter from "./components/Counter";
import Addvideo from "./components/Addvideolistbyform";
import Addvideolist from "./components/Addvideolist";
import { useState } from "react";
function App(){
  const [video,setVideo]= useState(videodb)

  function addvideo(videos){
    setVideo([...video,
         {...videos,
         id:video.length+1
      }])
    }
    function deletevideo(id){
    setVideo(video.filter(videos=>videos.id!==id))
    }

    function editvideo(id){
    
      }


  return(
  <>
<div className="App" onClick={()=>console.log('App')}>
<Addvideo addvideo={addvideo}></Addvideo>
<Addvideolist deletevideo={deletevideo} editvideo={editvideo} video={video} ></Addvideolist>
<button onClick={()=>{
setVideo([...video,
{title:'Demo js',
channel:"coder dost",
view:'1000k',
time:'4 year ago',
varified:true,
id:video.length+1, 
}
])} 
 }>SetVideo</button>
<div style={{clear:"both"}}><Counter ></Counter></div>
</div>
  </>
)}
export default App;