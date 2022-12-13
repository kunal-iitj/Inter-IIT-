import React from 'react'
import search from './../Images/searchcolor.png'
export default function Rightpanel() {
  return (
    <div>
      <div className="search"><h2>Quick Search</h2><div className="searchbar">
          <input type="text" placeholder='Search'/><button><img src={search} alt="" /></button>
        </div></div>
      
    </div>
  )
}
