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
import Login from './pages/Login/Login';
import Protected from './components/Protected/Protected';
import { AuthProvider } from './contexts/AuthProvider/AuthProvider';
import SportDetail from './pages/SportsDetail/SportDetail';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/news/sports"
              element={
                <Protected>
                  <Sports />
                </Protected>
              }
            />
            <Route
              path="/news/economy"
              element={
                <Protected>
                  <Economy />
                </Protected>
              }
            />
            <Route
              path="/news/technology"
              element={
                <Protected>
                  <Technology />
                </Protected>
              }
            />
            <Route
              path="/news/sports/:id"
              element={
                <Protected>
                  <SportDetail />
                </Protected>
              }
            />
          
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
