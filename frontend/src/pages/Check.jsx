import React from 'react'
// import { useLoginUserMutation } from "../services/featureplaylist";
import { usePlaylistQuery ,useArtistsQuery,useGenresQuery} from '../services/dataapi.js'

export default function Check() {
    // const {data} = usePlaylistQuery();
    const{data} = usePlaylistQuery();
    console.log(data)
    if (data){
        let {items} = data.playlists;
        console.log(items.length)
        console.log(items[0].name)
        console.log(items[0].images[0].url)
    }
  return data? (
    <div>
      {/* hello {data.playlists} */}
      {/* {JSON.parse(data)} */}
    </div>
  ):""
}
