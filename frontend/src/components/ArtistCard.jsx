import React from 'react'
import like from '../Images/heart.png'
import liked from '../Images/redheart.png'
export default function Card(props) {
  // console.log(props.name,2)
  const changepic = (e)=>{
    if(String(document.getElementById(props.number).src).slice(-23)=="src/Images/redheart.png")
document.getElementById(props.number).src=like;
else{
  document.getElementById(props.number).src=liked;
}
}
    return (
      <div className="scrollx"><img className='' src={props.image} alt="" /><div ><div className='artistname'>{(String(props.name)).slice(0,15)}</div>
          <span className="artistfollower" id="followers">#followers
          <button style={{height:"22px", width:"22px",margin:'0',marginLeft:'2vw',backgroundColor:"#16191e",border:"none"}}><img id={props.number} onClick={()=>changepic()} src={like} alt="" style={{height:"20px", width:"20px",margin:'0',marginLeft:'-6px'}}/></button> 
          </span>
          
          </div></div>
  )
}

