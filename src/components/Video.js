import './Video.css';
function Video({title,channel,view,time ,varified ,children}){
   return(
  // designing complete one component
  <>
 <div className='container'>
  <div className='pic'>
  <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dumy photo" width={210} height={190}></img>
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