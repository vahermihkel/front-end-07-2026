import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, setSonum] = useState("");
  const nimiRef = useRef(); // <---- html-st input-i seest väärtuse kättesaaja

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      setSonum("Toode sisestatud!");
    }
  }

  // const lisa = () => {
  //   if (nimiRef.current.value === "") {
  //     setSonum("Tühja nimetusega ei saa toodet lisada!");
  //   } else {
  //     setSonum("Toode sisestatud!");
  //   }
  // }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={() => lisa()}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode