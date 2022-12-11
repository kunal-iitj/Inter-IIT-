import React from 'react'
import profile from "./../Images/profile.jpg"
import arrow from "./../Images/arrow.png"

export default function Rightpanel() {
  function leftScroll(heading) {
    const left = document.querySelector(`.${heading}`);
    left.scrollBy(-150, 0);
  }
  function rightScroll(heading) {
    const right = document.querySelector(`.${heading}`);
    right.scrollBy(150, 0);
  }
  return (
    <div className='parts'>
      <div className="part1">
        <div className="profile">
        <img src={profile} alt="Avatar"/>
        <div className="username">USERNAME</div>
        </div>
        
      </div>
      <div className="Hots">
        <div className="albumphoto"><img src={profile} alt="" /></div>
        <div className="album_desc">Most Trending Songs| <p>#Artist Name</p></div>
      </div>
      <div className="part2">
        <h1>Recommended Songs</h1>
        <button className="left" onClick={()=>leftScroll("recommended")}>
          <img src={arrow} alt="" />
        </button>
        <div className="scrolled recommended">
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
        </div>
          <button className="right" onClick={()=>rightScroll("recommended")}>
          <img src={arrow} alt="" /></button>
      </div>
      <div className="part2">
        <h1>Trending Songs</h1>
        <button className="left" onClick={()=>leftScroll("trending")}><img src={arrow} alt="" /></button>
        <div className="scrolled trending">
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
        </div>
        <button className="right" onClick={()=>rightScroll("trending")}><img src={arrow} alt="" />
</button>
      </div>
      <div className="part2">
        <h1>Artists</h1>
        <button className="left" onClick={()=>leftScroll("artist")}><img src={arrow} alt="" /></button>
        <div className="scrolled artist">
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
        </div>
        <button className="right" onClick={()=>rightScroll("artist")}> <img src={arrow} alt="" />
</button>
      </div>
      <div className="part2">
        <h1>Instrumental</h1>
        <button className="left" onClick={()=>leftScroll("instrumental")}><img src={arrow} alt="" /></button>
        <div className="scrolled instrumental">
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <div className="scrollx"><img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" /><div><div>#SongName</div><div>#ArtistName</div></div></div>
          <button className="right" onClick={()=>rightScroll("instrumental")}><img src={arrow} alt="" /></button>
        </div>
      </div>

      
    </div>
  )
}
