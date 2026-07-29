import { useRef, useState } from "react";

function Kinkekaart() {
  //    muudetav  muutja          algväärtus
  const [summa, setSumma] = useState(20); // useState is not defined ----> importimata
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();
  
  function sisesta() {
    if (emailRef.current.value === "") {
      alert("Tühja emaili ei saa sisestada!");
    } else {
      alert("Email sisestatud!");
    }
  }

  return (
    <div>
      <button onClick={() => setSumma(20)}>20</button>
      <button onClick={() => setSumma(50)}>50</button>
      <button onClick={() => setSumma(100)}>100</button>
      <div>Kinkekaart {summa} €</div>
      <br />
      <br />
      <button disabled={kogus <= 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>
      <br />
      <br />
      <div>Kokku: {summa * kogus}€</div>
      <br />
      <br />
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={() => sisesta()}>Sisesta</button> <br />
    </div>
  )
}

export default Kinkekaart