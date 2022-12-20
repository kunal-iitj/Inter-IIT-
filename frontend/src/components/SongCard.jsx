import React from 'react'
import like from '../Images/heart.png'
import liked from '../Images/redheart.png'
export default function Card(props) {
  const changepic = (e)=>{
    if(String(document.getElementById(props.number).src).slice(-23)=="src/Images/redheart.png")
document.getElementById(props.number).src=like;
else{
  document.getElementById(props.number).src=liked;
}
}
  return (
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div ><div className='artistname'>SongName</div>
          <div className="artistfollower" id="followers">Artist

          <button style={{height:"22px", width:"22px",margin:'0',marginLeft:'2vw',backgroundColor:"#16191e",border:"none"}}><img id={props.number} onClick={()=>changepic()} src={like} alt="" style={{height:"20px", width:"20px",margin:'0',marginLeft:'-6px'}}/></button> 
          
           </div> 

          </div></div>
  )
}
