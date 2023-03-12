import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Sports from './pages/Sports/Sports';
import Technology from './pages/Technology/Technology';
import Page404 from './pages/Page404/Page404';
import Economy from './pages/Economy/Economy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/news/sports' element={<Sports />}/>
            <Route path='/news/economy' element={<Economy />}/>
            <Route path='/news/technology' element={<Technology />}/>
            <Route path='/*' element={<Page404 />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
