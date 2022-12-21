import React from 'react'
import Leftpanel from '../components/Leftpanel'
import Middlepanel from '../components/Middlepanel'
import Rightpanel from '../components/Rightpanel'
import { useProfileQuery } from '../services/userAuthApi'
import { getToken, getUserName, storeLikedSongs, storeUserName } from '../services/localStorage'

export default function Main() {

  if(!getUserName()){
    let { access_token } = getToken()
    // console.log(access_token)
    const { data, isSuccess } = useProfileQuery(access_token)

    console.log(data);
    // console.log(useProfileQuery(access_token));
    if(data){
      // const likedSongs = data.likedSongs
      // console.log(likedSongs)
      storeLikedSongs(data.likedSongs)
      storeUserName(data.user_name)
    }
  }

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
