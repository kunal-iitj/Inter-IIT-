import React, {useState} from 'react'
import searchicon from './../Images/searchcolor.png'
export default function Rightpanel() {

  const [search, setSearch] = useState('')
  const handleChange = () =>{
    setSearch(value)
  }

  return (
    <div>
      <div className="search" >
        <label htmlFor="search"><h2>Quick Search</h2></label>
        <div className="searchbar">
          <input type="text" placeholder='Search' id="search" value={search} onChange={handleChange}/>
          <button><img src={searchicon} alt="" /></button>
        </div>
      </div>
    </div>
  )
}
