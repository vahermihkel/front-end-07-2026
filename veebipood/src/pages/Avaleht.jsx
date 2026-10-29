import { useState } from "react"

function Avaleht() {
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust!");

  function nulli() {
    setKogus(0);
    setSonum("Kogus nullitud");
  }

  function vahenda() {
    setKogus(kogus - 1);
    setSonum("Kogus vähendatud");
  }

  function suurenda() {
    setKogus(kogus + 1);
    setSonum("Kogus suurendatud");
  }

  return (
    <div>
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Nulli</button>}
      <br />
      <button disabled={kogus <= 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht