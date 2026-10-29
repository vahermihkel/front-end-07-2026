import { useState } from "react";

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState([
    {"email": "a@a.com", "nimi": "Albert"},
    {"email": "m@m.com", "nimi": "Mattias"},
    {"email": "c@c.com", "nimi": "Chris"}
  ]);

  // const [kasutajad, setKasutajad] = useState([
  //  "a@a.com",
  //  "m@m.com",
  //  "c@c.com"
  // ]);

  function sorteeriNimiAZ() {
    kasutajad.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setKasutajad(kasutajad.slice());
  }

  function sorteeriEmailAZ() {
    kasutajad.sort((a,b) => a.email.localeCompare(b.email));
    setKasutajad(kasutajad.slice());
  }

  return (
    <div>
      <button onClick={sorteeriNimiAZ}>Sorteeri nimi AZ</button>
      <button onClick={sorteeriEmailAZ}>Sorteeri email AZ</button>
      {kasutajad.map(kasutaja => <div key={kasutaja.email}>{kasutaja.email} - {kasutaja.nimi}</div>)}
    </div>
  )
}

export default Kasutajad