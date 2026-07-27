//import { useState } from 'react'
import './App.css'
//import logo from "./assets/hero.png"
import {Link, Routes, Route} from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import Esindused from './pages/Esindused'
import NotFound from './pages/NotFound'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">
        <img className="logo" src="https://template.canva.com/EAGR4J_-jYM/2/0/1600w-zxo07UzxTDw.jpg" alt="Logo" />
      </Link>
      {/* <img src={logo} alt="Logo" /> */}

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
