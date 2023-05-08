import Playbutton from "./Playbutton"
import Video from "./Video"

function Addvideolist({video}){
    return(
  <>    
<div>  
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
 </> 
    ) 
}
export default Addvideolist