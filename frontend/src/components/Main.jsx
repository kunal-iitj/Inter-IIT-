import React from 'react'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'
export default function Main() {
  return (
    <div>
      <div className="splithome leftbox">
            <Leftpanel/>
        </div>
        <div className="splithome rightbox">
          <Rightpanel/>
          </div>
    </div>
  )
}
