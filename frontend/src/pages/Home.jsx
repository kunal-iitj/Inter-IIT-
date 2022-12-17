import React from 'react'
import Leftpanel from '../components/Leftpanel'
import Middlepanel from '../components/Middlepanel'
import Rightpanel from '../components/Rightpanel'
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
        <Rightpanel/>
      </div>
    </>
  )
}
