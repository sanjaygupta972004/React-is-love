import './Video.css';

let topic="React Js ";
let bg="dark";
let id;
function Video({title,channel,view,time ,varified ,children}){
   return(
  // designing complete one component
  <>
 <div className='container'>
  <div className='pic'>
  <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="dumy photo" width={300} height={200}></img>
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