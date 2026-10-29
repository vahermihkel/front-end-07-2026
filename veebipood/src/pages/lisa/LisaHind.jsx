import { useRef } from "react";

function LisaHind() {
  const hindRef = useRef();
  const sonanaRef = useRef();

  function lisa() {
    fetch("https://6a917d307751d35ce47e88a4.mockapi.io/hinnad", {
      method: "POST",
      body: JSON.stringify({
        arv: hindRef.current.value,
        sonana: sonanaRef.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div>
      <label>Hind arvuna</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Hind sõnana</label> <br />
      <input ref={sonanaRef} type="text" /> <br />
      <button onClick={() => lisa()}>Lisa hind</button>
    </div>
  )
}

export default LisaHind