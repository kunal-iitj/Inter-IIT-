import React from 'react'
import Leftpanel from './Leftpanel'
import Midfromprofile from './Midforprofile'
import Rightpanel from './Rightpanel'


export default function Profilepage() {
  return (
    <>
      <div className="splithome leftbox">
        <Leftpanel/>
      </div>
      <div className="splithome middlebox">
        <Midfromprofile/>
      </div>
      <div className="splithome rightbox">
        <Rightpanel/>
      </div>
    </>
  )
}
