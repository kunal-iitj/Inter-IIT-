import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { likedSongsApi } from './likedSongsApi'

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [likedSongsApi.reducerPath]: likedSongsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userAuthApi.middleware,
      likedSongsApi.middleware,
    ]),
})

setupListeners(store.dispatch)