import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/lisa/LisaToode'
import Seaded from './pages/Seaded'
import Esindused from './pages/arrays/Esindused'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import Arrays from './pages/arrays/Arrays'
import HaldaHome from './pages/halda/HaldaHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HaldaHinnad from './pages/halda/HaldaHinnad'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaTooted from './pages/halda/HaldaTooted'
import LisaHome from './pages/lisa/LisaHome'
import LisaAuto from './pages/lisa/LisaAuto'
import LisaEsindus from './pages/lisa/LisaEsindus'
import LisaHind from './pages/lisa/LisaHind'
import LisaKasutaja from './pages/lisa/LisaKasutaja'
import LisaTootaja from './pages/lisa/LisaTootaja'
import ApiHome from './pages/api/ApiHome'
import Books from './pages/api/Books'
import Cars from './pages/api/Cars'
import Products1 from './pages/api/Products1'
import Products2 from './pages/api/Products2'
import Products3 from './pages/api/Products3'
import Vocabulary from './pages/api/Vocabulary'
import Tabs from './components/Tabs'
import YksAuto from './pages/yks/YksAuto'
import YksEsindus from './pages/yks/YksEsindus'
import YksHind from './pages/yks/YksHind'
import YksKasutaja from './pages/yks/YksKasutaja'
import YksTootaja from './pages/yks/YksTootaja'
import YksToode from './pages/yks/YksToode'
import Products from './pages/arrays/Products'
import AddProduct from './pages/lisa/AddProduct'
import Categories from './pages/arrays/Categories'
import AddCategory from './pages/lisa/AddCategory'

function App() {
  const [tume, setTume] = useState(localStorage.getItem("darkTheme") || "true");

  const vahetaTeema = () => {
    if (tume === "true") {
      localStorage.setItem("darkTheme", "false");
      setTume("false");
    } else {
      localStorage.setItem("darkTheme", "true");
      setTume("true");
    }
  }

  return (
    <div className={tume === "true" ? "rakendus tume" : "rakendus"}>
      <Menu tume={tume} vahetaTeema={vahetaTeema} />

      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/kalkulaator" element={ <Kalkulaator /> } />

        <Route path="/arrays" element={ <Arrays /> } />
        <Route path="/autod" element={ <Autod /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="/hinnad" element={ <Hinnad /> } />
        <Route path="/kasutajad" element={ <Kasutajad /> } />
        <Route path="/tootajad" element={ <Tootajad /> } />
        <Route path="/tooted" element={ <Tooted /> } />

        <Route path="/halda" element={ <HaldaHome /> } />
        <Route path="/halda-autod" element={ <HaldaAutod /> } />
        <Route path="/halda-esindused" element={ <HaldaEsindused /> } />
        <Route path="/halda-hinnad" element={ <HaldaHinnad /> } />
        <Route path="/halda-kasutajad" element={ <HaldaKasutajad /> } />
        <Route path="/halda-tootajad" element={ <HaldaTootajad /> } />
        <Route path="/halda-tooted" element={ <HaldaTooted /> } />

        <Route path="/lisa" element={ < LisaHome /> } />
        <Route path="/lisa-auto" element={ <LisaAuto /> } />
        <Route path="/lisa-esindus" element={ <LisaEsindus /> } />
        <Route path="/lisa-hind" element={ <LisaHind /> } />
        <Route path="/lisa-kasutaja" element={ <LisaKasutaja /> } />
        <Route path="/lisa-tootaja" element={ <LisaTootaja /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />

        <Route path="/yks-auto/:autoId" element={ <YksAuto /> } />
        <Route path="/yks-esindus" element={ <YksEsindus /> } />
        <Route path="/yks-hind/:hindId" element={ <YksHind /> } />
        <Route path="/yks-kasutaja" element={ <YksKasutaja /> } />
        <Route path="/yks-tootaja" element={ <YksTootaja /> } />
        <Route path="/yks-toode" element={ <YksToode /> } />

        <Route path="/api" element={ <ApiHome /> } />
        <Route path="/books" element={ <Books /> } />
        <Route path="/cars" element={ <Cars /> } />
        <Route path="/products1" element={ <Products1 /> } />
        <Route path="/products2" element={ <Products2 /> } />
        <Route path="/products3" element={ <Products3 /> } />
        <Route path="/vocabulary" element={ <Vocabulary /> } />

        <Route path="/products" element={ <Products /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
        <Route path="/categories" element={ <Categories /> } />
        <Route path="/add-category" element={ <AddCategory /> } />

        <Route path="/*" element={ <NotFound /> } />
      </Routes>

      <span className="tabs">
        <Tabs />
      </span>
    </div>
  )
}

export default App
