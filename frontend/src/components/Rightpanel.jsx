import React from 'react'
import search from './../Images/searchcolor.png'
export default function Rightpanel() {
  return (
    <div>
      <div className="search" ><label htmlFor="search"><h2>Quick Search</h2></label><div className="searchbar">
          <input type="text" placeholder='Search' id="search"/><button><img src={search} alt="" /></button>
        </div></div>
      
    </div>
  )
}
