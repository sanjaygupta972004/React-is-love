import Playbutton from "./Playbutton"
import Video from "./Video"

function Addvideolist({video,deletevideo,editvideo}){
    return(
  <>    
<div>  
  {video.map(video=><Video
      key={video.id}
      title={video.title}
      channel={video.channel}
      view={video.view}
      time={video.time}
      varified={video.varified}
      id={video.id}
      deletevideo={deletevideo}
      editvideo={editvideo}

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