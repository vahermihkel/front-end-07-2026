import { Link } from "react-router-dom"

function ApiHome() {
  return (
    <div>
      <Link to="/books">
        <button className="nupp">Books</button>
      </Link>
	  <Link to="/cars">
        <button className="nupp">Cars</button>
      </Link>
	  <Link to="/products1">
        <button className="nupp">Products1</button>
      </Link>
	  <Link to="/products2">
        <button className="nupp">Products2</button>
      </Link>
	  <Link to="/products3">
        <button className="nupp">Products3</button>
      </Link>
	  <Link to="/vocabulary">
        <button className="nupp">Vocabulary</button>
      </Link>
    </div>
  )
}

export default ApiHome