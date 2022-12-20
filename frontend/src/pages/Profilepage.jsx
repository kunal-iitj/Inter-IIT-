import React from 'react'
import Leftpanel from '../components/Leftpanel'
import Midforprofile from '../components/Midforprofile'
import Rightpanel from '../components/Rightpanel'


export default function Profilepage() {
  return (
    <>
      <div className="splithome leftbox">
        <Leftpanel/>
      </div>
      <div className="splithome middlebox">
        <Midforprofile/>
      </div>
      <div className="splithome rightbox">
        <Rightpanel/>
      </div>
    </>
  )
}
