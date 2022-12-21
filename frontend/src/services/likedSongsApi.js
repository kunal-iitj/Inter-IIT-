import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const likedSongsApi = createApi({
  reducerPath: 'likedSongsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/auth/' }),
  endpoints: (builder) => ({
    addLikedSong: builder.mutation({
      query: ({songName, access_token}) => {
        return {
          url: 'addlikedsong/',
          method: 'POST',
          body: {songName: songName},
        //   body: user,
          headers: {
            // 'Content-type': 'application/json',
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    removeLikedSong: builder.mutation({
      query: (data) => {
        return {
          url: 'removelikedsong/',
          method: 'POST',
          body: {'songName':data.songName},
          headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${data.access_token}`,
          }
        }
      }
    }),
  }),
})

export const { useAddLikedSongMutation, useRemoveLikedSongMutation } = likedSongsApi
