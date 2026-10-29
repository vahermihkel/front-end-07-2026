import { useEffect, useState } from "react";

function Vocabulary() {
    const [vocabulary, setVocabulary] = useState([])

    // Käimaminemise funktsioon. Kui lehele satun, siis käivitab selle funktsiooni.
    // useEffect(() => {
    //     fetch("https://marineregions.org/rest/getGazetteerTypes.json") // kust info võtan
    //     .then(res => res.json()) // mis kujul info võtan
    //     .then(data => setVocabulary(data)) // andmestikus on kirjas {results: [ANDMESTIK]}
    // }, []);

    useEffect(() => {
        const fetchVocabulary = async () => {
            const response = await fetch("https://marineregions.org/rest/getGazetteerTypes.json");
            const data = await response.json();
            setVocabulary(data);
        };

        fetchVocabulary();
    }, []);

  return (
    <div>
      <h1>Vocabulary</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {vocabulary.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.brand}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.rating}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary