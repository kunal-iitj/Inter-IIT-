import React from 'react'
import { useState,useEffect } from 'react'
import Tile3Albums from '../components/Tile3'
import Leftpanel from '../components/Leftpanel'
import Middlepanel from '../components/Middlepanel'
import Rightpanel from '../components/Rightpanel'
import profile from '../Images/profile.jpg'
import { getUserName } from '../services/localStorage';
import { useNavigate } from 'react-router-dom'


export default function Albums() {
  const navigate = useNavigate()
  const [Artists, setArtist] = useState([])
  const fetchPlaylists = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/api/artists',
      {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    const data = await response.json()
    setArtist(data)
  }
  
  console.log(Artists);
  useEffect(() => {
    fetchPlaylists()
  }, [])
  return (
    <>
    <div>
        <div className="splithome leftbox">
        <Leftpanel/>
        </div>
      <div className="album-right">
        <div className="part1">
            <button className="albums" onClick={()=>navigate('/albums')}>Albums</button>
            <button className="playlisttop" onClick={()=>navigate('/playlist')}>Playlist</button>
            <button className="genres" onClick={()=>navigate('/genres')}>Genres</button>
            <div className="profile">
            <img src={profile} alt="Avatar"/>
            <div className="Username">{getUserName()}</div>
            </div>
        </div>

        <div className="album-part">
          {Artists.map(i=>{
            return <Tile3Albums name={i.name} image={i.images[0].url}/>
          })

          }
        </div>
      </div>
      </div>
    </>
  )
}
