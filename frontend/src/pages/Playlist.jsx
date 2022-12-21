import React from "react";
import Leftpanel from "../components/Leftpanel";
import profile from "../Images/profile.jpg";
import ImageSlider from "../components/ImageSlider";
import Playlistcard from "../components/Playlistcard";
import { usePlaylistQuery ,useArtistsQuery,useGenresQuery} from '../services/dataapi.js'




export default function Playlist() {
  const{data} = usePlaylistQuery();
  // console.log(data)
  let items=[]
  if (data){
      let {items} = data.playlists;
      // console.log(items[0].name)
      console.log(items[0].images[0].url)
      const playlistcount = items.length;
      var playlist=[];
      var a=0;
      for(var i=0; i<playlistcount; i++){
          playlist.push({card:<Playlistcard/>,"key":i});
        }
  }



  return data? (
    <div className="playlist-page">
      <div className="splithome leftbox">
        <Leftpanel />
      </div>
      <div className="playlist-right">
        <div className="part1">
          <button className="albums">Albums</button>
          <button className="playlisttop">Playlist</button>
          <button className="genres">Genres</button>
          <div className="profile">
            <img src={profile} alt="Avatar" />
            <div className="Username">username</div>
          </div>
        </div>
        <div className="playlists">
            {items.map(i=>
                {return <Playlistcard key={i['key']}  nam={i['key']} name={i.name} image={i.image[0].url}/>}
            )}
            
        </div>
      </div>
    </div>
  ):<div>hello</div>;
}
