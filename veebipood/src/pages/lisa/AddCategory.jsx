import { useRef } from "react";

function AddCategory() {
  const nameRef = useRef(); 

    function lisa() {
      if (nameRef.current.value === "") {
        alert("Tühja nimega ei saa kategooriat lisada!");
        return; // funktsioon lõpetab töö, kui tootja on tühi
      }
      
      alert("Kategooria backendi sisestatud!");
      fetch("http://localhost:8080/categories", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      } )
      
    }

  return (
    <div>
      <label>Kategooria nimi</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <button onClick={() => lisa()}>Sisesta</button> <br />
    </div>
  )
}

export default AddCategory