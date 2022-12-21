import React from 'react'
import { useState,useEffect } from 'react'
import Leftpanel from '../components/Leftpanel'
import Tile3Genres from '../components/Tile3'
import profile from '../Images/profile.jpg'
import { getUserName } from '../services/localStorage';

import { usePlaylistQuery ,useArtistsQuery,useGenresQuery} from '../services/dataapi.js'
import { useNavigate } from 'react-router-dom'


export default function Genres() {
  const navigate = useNavigate()
  const [Genres, setGenres] = useState([])
  const fetchPlaylists = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/api/genres',
      {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    const data = await response.json()
    setGenres(data.genres)
  }
  console.log(Genres);
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
        {Genres.map(i=>{
          return <Tile3Genres name={i} />
        })
          }
            
        </div>
      </div>
      </div>
    </>
  )
}
