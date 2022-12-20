import React from 'react';
import ReactDOM  from 'react-dom';
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import {store} from '../src/services/store'

// import "App.css";
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>
    ,document.getElementById("root"));