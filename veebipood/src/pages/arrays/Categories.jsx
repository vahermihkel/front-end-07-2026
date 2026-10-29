import { useEffect, useState } from "react";

function Categories() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then(response => response.json())
            .then(json => setCategories(json));
    }, []);

  return (
    <div>
        {categories.map(category => 
            <div key={category.id}>
                <div>{category.name}</div>
            </div>
        )}
    </div>
  )
}

export default Categories