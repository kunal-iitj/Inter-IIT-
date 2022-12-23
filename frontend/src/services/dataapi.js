import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const DataApi = createApi({
  reducerPath: 'featureplaylist',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    playlist: builder.query({
      query: () => "featuredPlaylist",
    }),
    artists: builder.query({
      query: () => "artists",
    }),
    genres: builder.query({
      query: () => "genres",
    }),
  }),
})

export const { usePlaylistQuery,useArtistsQuery ,useGenresQuery} = DataApi
