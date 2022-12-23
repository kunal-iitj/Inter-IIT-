import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import {store} from '../src/services/store'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { DataApi } from './services/dataapi'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={DataApi}> */}
    <App />
    {/* </ApiProvider> */}
    </Provider>
  // </React.StrictMode>
)
