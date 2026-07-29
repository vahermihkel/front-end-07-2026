import { useState } from "react"

function Seaded() {
  const [keel, setKeel] = useState("et");

  return (
    <div>
      <button onClick={() => setKeel("et")}>Eesti</button>
      <button onClick={() => setKeel("en")}>Inglise</button>
      <button onClick={() => setKeel("es")}>Hispaania</button>
      <button onClick={() => setKeel("ru")}>Vene</button>
      <div>Hetkel aktiivne keel: {keel}</div>
      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La pagina esta en espanol</div>}
      {keel === "ru" && <div>Etot list na russkom</div>}
      {keel !== "et" && <div>Other translations other than Estonian are not ready yet</div>}
    </div>
  )
}

export default Seaded