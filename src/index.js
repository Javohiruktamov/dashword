import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import {DarkmodeContextProvider} from "./Components/Context/DarkModeContext"
import { AuthContextProvider } from './Components/Context/AuthContext';
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <DarkmodeContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </DarkmodeContextProvider>
  </AuthContextProvider>
);

