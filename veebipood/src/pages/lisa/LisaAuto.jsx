import { useEffect, useRef, useState } from "react";

function LisaAuto() {
  const [sonum, setSonum] = useState("");
  const [tootjad, setTootjad] = useState([]);
  const tootjaRef = useRef(); // <---- html-st input-i seest väärtuse kättesaaja
  const markRef = useRef();
  const hindRef = useRef();
  const varvRef = useRef();
  const varvESTRef = useRef();
  const piltRef = useRef();

  useEffect(() => {
    fetch("/carapi/api/makes/v2")
      .then(response => response.json())
      .then(json => setTootjad(json.data));
  }, []);

    function lisa() {
      if (tootjaRef.current.value === "") {
        setSonum("Tühja tootja nimega ei saa autot lisada!");
        return; // funktsioon lõpetab töö, kui tootja on tühi
      }

      if (markRef.current.value === "") {
        setSonum("Tühja marki nimega ei saa autot lisada!");
        return; // funktsioon lõpetab töö, kui mark on tühi
      }

      if (hindRef.current.value === "") {
        setSonum("Tühja hinda nimega ei saa autot lisada!");
        return; // funktsioon lõpetab töö, kui hind on tühi
      }

      if (varvRef.current.value === "") {
        setSonum("Tühja värvi nimega ei saa autot lisada!");
        return; // funktsioon lõpetab töö, kui varv on tühi
      }

      if (piltRef.current.value === "") {
        setSonum("Tühja pildi nimega ei saa autot lisada!");
        return; // funktsioon lõpetab töö, kui pilt on tühi
      }
      
      setSonum("Auto sisestatud!");
      fetch("https://6a917d307751d35ce47e88a4.mockapi.io/autod", {
        method: "POST",
        body: JSON.stringify({
          tootja: tootjaRef.current.value,
          mark: markRef.current.value,
          hind: hindRef.current.value,
          varv: varvRef.current.value,
          varvEST: varvESTRef.current.value,
          pilt: piltRef.current.value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      } )
      
    }

  return (
    <div>
      <div>{sonum}</div>
      <label>Auto tootja</label> <br />
      {/* <input ref={tootjaRef} type="text" /> <br /> */}
      <select ref={tootjaRef}>
        {tootjad.map(tootja => <option key={tootja.id}>{tootja.name}</option>)}
      </select> <br />
      <label>Auto mark</label> <br />
      <input ref={markRef} type="text" /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Auto värv inglise keeles</label> <br />
      <input ref={varvRef} type="text" /> <br />
      <label>Auto värv eesti keeles</label> <br />
      <input ref={varvESTRef} type="text" /> <br />
      <label>Auto pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <button onClick={() => lisa()}>Sisesta</button> <br />
    </div>
  )
}

export default LisaAuto