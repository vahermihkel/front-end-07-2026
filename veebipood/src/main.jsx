import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks (URLi vahetamine koos sisu(HTML) vahetusega) on vajalik:
// 1. panna node_modules kausta react-router-dom kood (npm install react-router-dom)
// 2. vaja võtta sealt kaustast kood nimega BrowserRouter (import {BrowserRouter} from 'react-router-dom')
// 3. ümbritseda meie rakendus e App selle BrowserRouteriga
// 4. App.jsx failis URLi ja HTMLi ühendusi 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
