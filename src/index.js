import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Data from "./Components/Pages/Data";
import Cool from "./Components/Pages/Cool";
import BoxList from "./Components/BoxList";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<App/>}>
                  <Route index element={<Home/>}/>
                  <Route path={"Cool"} element={<Cool/>}/>
                  <Route path={"Data"} element={<Data/>}>
                  <Route index element={<BoxList/>}/>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
