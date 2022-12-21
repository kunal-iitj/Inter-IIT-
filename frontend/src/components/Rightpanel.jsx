import React, {useState} from 'react'
import search from './../Images/searchcolor.png'
export default function Rightpanel() {

  const [search, setSearch] = useState('')
  const handleChange = (event) =>{
    setSearch(event.target.value)
    console.log(search);
  }



  return (
    <div>
      <div className="search" >
        <label htmlFor="search"><h2>Quick Search</h2></label>
        <div className="searchbar">
          <input type="text" placeholder='Search' id="search" value={search} onChange={handleChange}/>
          <button type='submit' onSubmit={handleSubmit}>Click</button>
        </div>
      </div>
    </div>
  )
}
