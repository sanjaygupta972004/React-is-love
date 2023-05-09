import './Video.css';
function Video({title,channel,view,time ,varified ,children ,id,deletevideo,editvideo}){

   return(
  // designing complete one component
  <>
 <div className='container'>
  <div className='close' onClick={()=>deletevideo(id)}>X
  </div>
  <div className='edit' onClick={()=>editvideo(id)}>Edit
  </div>

  <div className='pic'>
  <img src={`https://picsum.photos/id/${id}/367/267`} alt="dumy photo" width={210} height={190}></img>
  </div>
<div className='title'> {title}</div>
<div className='channel'> {channel}{varified? "😄" :null}</div> 
<div className='view'> {view} views <span>.</span>{time} </div>
<div>{children}</div>
</div>
</>
 )
}
export default Video