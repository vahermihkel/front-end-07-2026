import { useState } from "react"

// rfce
function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState([
    {"keskus": "Rocca al Mare", "tel": "512321321", "aadress": "Loomaaia 55"}, 
    {"keskus": "Kristiine", "tel": "512321312", "aadress": "Endla 123"}, 
    {"keskus": "Järveotsa", "tel": "51232155", "aadress": "Järve 777"}, 
    {"keskus": "Ülemiste", "tel": "5123213457", "aadress": "Suur-Sõjamäe 65"}, 
    {"keskus": "Vesse", "tel": "51232432", "aadress": "Vesi 5"}, 
    {"keskus": "Magistrali", "tel": "512321323", "aadress": "Mäe 321"}
  ])

  function sorteeriAZ() {
    esindused.sort();
    setEsindused(esindused.slice());
  }

  return (
    <div>
      <div>Hetkel aktiivne linn: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
      <>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        {esindused.map(esindus => <div key={esindus.keskus}>{esindus.keskus} ({esindus.tel}) - {esindus.aadress}</div>)}
        {/* <div>Rocca al Mare</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
        <div>Ülemiste</div>
        <div>Vesse</div>
        <div>Magistrali</div> */}
      </>}


      {linn === "Tartu" && 
      <>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused