import React from 'react'
import Leftpanel from './Leftpanel'
import Middlepanel from './Middlepanel'
export default function Main() {
  return (
    <>
      <div className="splithome leftbox">
        <Leftpanel/>
      </div>
      <div className="splithome middlebox">
        <Middlepanel/>
      </div>
      <div className="splithome rightbox">
        
      </div>
    </>
  )
}
