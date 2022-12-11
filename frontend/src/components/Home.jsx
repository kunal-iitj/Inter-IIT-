import React from 'react'
import Leftpanel from './Leftpanel'
import Main from './Main'
import Rightpanel from './Rightpanel'
import Songtrack from './Songtrack'
export default function Home() {
  return (
    <div>
      <div className="upper">
        <Main/>
      </div>
      {/* <div className="lower">
        <Songtrack/>
      </div> */}
    </div>
  )
}
