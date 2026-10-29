import { useEffect, useState } from "react";

function Products1() {
    const [products, setProducts] = useState([])

    // Käimaminemise funktsioon. Kui lehele satun, siis käivitab selle funktsiooni.
    useEffect(() => {
        fetch("https://dummyjson.com/products") // kust info võtan
        .then(res => res.json()) // mis kujul info võtan
        .then(data => setProducts(data.products)) // andmestikus on kirjas {products: [ANDMESTIK]}
    }, []);

  return (
    <div>
      <h1>Products1</h1>
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
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.brand}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products1