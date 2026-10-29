import { useEffect, useRef, useState } from "react";

function AddProduct() {
  const [sonum, setSonum] = useState("");
  const [categories, setCategories] = useState([]);
  const nameRef = useRef(); 
  const priceRef = useRef();
  const imageRef = useRef();
  const stockRef = useRef();
  const activeRef = useRef();
  const categoryRef = useRef(); // kasutame hiljem

  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(response => response.json())
      .then(json => setCategories(json));
  }, []);

    function lisa() {
      if (nameRef.current.value === "") {
        setSonum("Tühja nimega ei saa toodet lisada!");
        return; // funktsioon lõpetab töö, kui tootja on tühi
      }

      if (priceRef.current.value === "") {
        setSonum("Tühja hinnaga ei saa toodet lisada!");
        return; // funktsioon lõpetab töö, kui hind on tühi
      }
      
      setSonum("Toote backendi sisestatud!");
      fetch("http://localhost:8080/products", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          price: Number(priceRef.current.value),
          image: imageRef.current.value,
          stock: Number(stockRef.current.value),
          active: activeRef.current.checked,
          category: {
            "id": Number(categoryRef.current.value)
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      } )
      
    }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote kategooria</label> <br />
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select> <br />
      <label>Toote nimi</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={priceRef} type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Toote kogus</label> <br />
      <input ref={stockRef} type="text" /> <br />
      <label>Toote active</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={() => lisa()}>Sisesta</button> <br />
    </div>
  )
}

export default AddProduct