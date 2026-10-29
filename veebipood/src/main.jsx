import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { KogusummaContextProvider } from './context/KogusummaContextProvider.jsx';

// Navigeerimiseks (URLi vahetamine koos sisu(HTML) vahetusega) on vajalik:
// 1. panna node_modules kausta react-router-dom kood (npm install react-router-dom)
// 2. vaja võtta sealt kaustast kood nimega BrowserRouter (import {BrowserRouter} from 'react-router-dom')
// 3. ümbritseda meie rakendus e App selle BrowserRouteriga
// 4. App.jsx failis URLi ja HTMLi ühendusi 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <KogusummaContextProvider>
        <App />
      </KogusummaContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

// 1) 27.07 Reacti rakenduse loomine ja routemine
// 2) 29.07 useState, useRef, if/else, function, onCLick
// 3) 03.08 Indrek
// 4) 10.08 Hans
// 5) 12.08 Indrek
// 6) 13.08 dünaamiline CSS (muutujate kaudu), alamkomponendid, kalkulaator
// 7) 17.08 Indrek
// 8) 19.08 arrays
// 9) 25.08 T kell 14.00 objektid, key, objektide sorteerimine
//10) 28.08 R kell 14.15 mockapi andmebaas
//11) 01.09 T kell 14.15 API päringud (tarnijad), 
//12) 05.09 L kell 14.15 pakiautomaadid, makse
//13) 09.09 K kell 10.00 useParams(), lisamine
//14) 11.09 R kell 11.00 ------------->
//15) 14.09 E kell 11.00 Claude
//16) 18.09 R kell 15.15 
//17) 22.09 T kell 13.00
//18) 07.10 K kell 16.00-17.30