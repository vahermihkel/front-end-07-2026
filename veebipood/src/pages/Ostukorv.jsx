import { useContext, useState } from "react"
import Pakiautomaadid from "../components/Pakiautomaadid";
import Makse from "../components/Makse";
import { KogusummaContext } from "../context/KogusummaContext";

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const {setKogusumma} = useContext(KogusummaContext);

  function tyhjenda() {
    setTooted([]); // uuendada HTML-s ostukorvi seisu
    localStorage.setItem("ostukorv", JSON.stringify([])); // uuendada LocalStorage-it
    setKogusumma(0);
  }

  function kustuta(index) {
    tooted.splice(index,1); // splice on kustutamiseks. kaks numbrit, peaaegu alati on teine number 1. esimene: mitmendat, teine: mitu tk.
    setTooted(tooted.slice()); // slice on koopia tegemiseks, mälukoha kustutamiseks. 
    localStorage.setItem("ostukorv", JSON.stringify(tooted)); // salvestab localStorage-i
    setKogusumma(arvutaKogusumma());
  }

  function arvutaKogusumma() {
    let kogusumma = 0;
    tooted.forEach(toode => kogusumma = kogusumma + Number(toode.hind));
    return kogusumma;
  }

  return (
    <div>
      <button onClick={() => tyhjenda()}>Tühjenda</button>
      <br />
      <div>Toodete koguarv on: {tooted.length} tk</div>
      <div>{tooted.map((toode, index) => 
          <div key={index}>
            {toode.tootja} {toode.mark}: {toode.hind}
            <button onClick={() => kustuta(index)}>x</button> </div>)}
          </div>
      <br />
      <Pakiautomaadid />

      <div>Ostukorvi kogusumma: {arvutaKogusumma().toFixed(2)} €</div>

      <Makse summa={arvutaKogusumma()} />
    </div>
  )
}

export default Ostukorv