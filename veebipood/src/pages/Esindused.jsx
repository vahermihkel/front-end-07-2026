import { useState } from "react"

// rfce
function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
      <div>Hetkel aktiivne linn: {linn}</div>
      <button onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button onClick={() => setLinn("Tartu")}>Tartu</button>
      <button onClick={() => setLinn("Narva")}>Narva</button>
      <button onClick={() => setLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
      <>
        <div>Rocca al Mare</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
        <div>Ülemiste</div>
        <div>Vesse</div>
        <div>Magistrali</div>
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