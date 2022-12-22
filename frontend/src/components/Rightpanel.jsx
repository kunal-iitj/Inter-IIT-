import React, {useState} from 'react'
<<<<<<< HEAD
import search1 from './../Images/searchcolor.png'
=======
import searchImg from './../Images/searchcolor.png'
>>>>>>> 51fa698a0339777f66b5e8672bb6db75416d2ddf
import SearchCard from './SearchCard';

export default function Rightpanel() {

  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }

  const handleSubmit = async ()=> {
    const searchQuery = {search: search}
    const response = await fetch(
      'http://127.0.0.1:8000/api/search', 
      {
        method: 'POST',
        body: JSON.stringify(searchQuery), 
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await response.json()
    setData(data)
  }

  return (
    <div>
      <div className="search" >
        <label htmlFor="search"><h2>Quick Search</h2></label>
        <div className="searchbar">
<<<<<<< HEAD
          <input type="text" placeholder='Search' id="search" value={search} onChange={handleChange}/>
          <button type='submit' onClick={handleSubmit}><img src={search1} alt="" /></button>
=======
          <input type="text" placeholder='Search' id="search" value={search} onChange={handleChange} autoComplete='off'/>
          <button type='submit' onClick={handleSubmit}><img src={searchImg} alt="" srcset="" /></button>
>>>>>>> 51fa698a0339777f66b5e8672bb6db75416d2ddf
        </div>
        <SearchCard name={data.name} image={data.images} artist={data.artist}/>
      </div>
    </div>
  )
}