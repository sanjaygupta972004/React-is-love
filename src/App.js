
import "./App.css"
import Video from "./components/Video";
import videodb from "./Data/datadb";
import Playbutton from "./components/Playbutton";
import Counter from "./components/Counter";
import Addvideo from "./components/Addvideolistbyform";
import { useState } from "react";
function App(){

  const [video,setVideo]= useState(videodb)

  function addvideo(videos){
    setVideo([...video,
         videos
      ])
  }
  return(
  <>
  
<Addvideo addvideo={addvideo}></Addvideo>

<div className="App" onClick={()=>console.log('App')}>
<div>
<button onClick={()=>{
setVideo([...video,
{title:'Demo js',
channel:"coder dost",
view:'1000k',
time:'4 year ago',
varified:true }
]
)} 
 }>SetVideo</button>

</div>  
  {video.map(video=><Video
      title={video.title}
    channel={video.channel}
    view={video.view}
    time={video.time}
    varified={video.varified}
    >
    <div style={{clear:"both"}}>
    <Playbutton onClick={()=>console.log('playing',video.title)} onPause ={()=>console.log("pause",video.title)}>{video.title} </Playbutton>
    </div>
    </Video>
    )
  }
 </div>

<div style={{clear:"both"}}><Counter ></Counter></div>

  
  </>
  )
  }
export default App;