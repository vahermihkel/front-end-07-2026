import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then(response => response.json())
            .then(json => setProducts(json));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then(response => response.json())
            .then(json => setCategories(json));
    }, []);

    function filterByCategory(categoryName) {
        fetch("http://localhost:8080/products")
            .then(response => response.json())
            .then(json => {
                const result = json.filter(product => product.category?.name === categoryName);
                setProducts(result);
            });

        
    }

  return (
    <div>
        {categories.map(category => <button key={category.id} onClick={() => filterByCategory(category.name)}>{category.name}</button>)}
        {products.map(product => 
            <div key={product.id}>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <button>Lisa ostukorvi</button>
            </div>
        )}
    </div>
  )
}

export default Products