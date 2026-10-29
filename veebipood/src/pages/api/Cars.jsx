import { useEffect, useState } from "react";

function Cars() {
    const [cars, setCars] = useState([])

    // Käimaminemise funktsioon. Kui lehele satun, siis käivitab selle funktsiooni.
    useEffect(() => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100") // kust info võtan
        .then(res => res.json()) // mis kujul info võtan
        .then(data => setCars(data.results)) // andmestikus on kirjas {results: [ANDMESTIK]}
    }, []);

  return (
    <div>
      <h1>Cars</h1>
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
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.title}</td>
              <td>${car.price.toFixed(2)}</td>
              <td>{car.brand}</td>
              <td>{car.description}</td>
              <td>{car.category}</td>
              <td>{car.rating}</td>
              <td>{car.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cars