import React from 'react'
import like from '../Images/heart.png'
import liked from '../Images/redheart.png'
export default function Card(props) {
  const changepic = (e)=>{
    if(String(document.getElementById(props.number).src).slice(21,100)=="/src/Images/redheart.png")
document.getElementById(props.number).src=like;
else{
  document.getElementById(props.number).src=liked;
}
}
    return (
      <div className="scrollx"><img className='' src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div ><div className='artistname'>Artist</div>
          <span className="artistfollower" id="followers">#Followers <button style={{height:"22px", width:"22px",margin:'0',marginLeft:'2vw',backgroundColor:"#16191e",border:"none"}}><img id={props.number} onClick={()=>changepic()} src={like} alt="" style={{height:"20px", width:"20px",margin:'0',marginLeft:'-6px'}}/></button> </span>
          
          </div></div>
  )
}

