import { Link } from "react-router-dom"

function LisaHome() {
  return (
    <div>
      <Link to="/lisa-auto">
        <button className="nupp">Lisa auto</button>
      </Link>
			<Link to="/lisa-esindus">
        <button className="nupp">Lisa esindus</button>
      </Link>
			<Link to="/lisa-hind">
        <button className="nupp">Lisa hind</button>
      </Link>
			<Link to="/lisa-kasutaja">
        <button className="nupp">Lisa kasutaja</button>
      </Link>
			<Link to="/lisa-tootaja">
        <button className="nupp">Lisa töötaja</button>
      </Link>
			<Link to="/lisa-toode">
        <button className="nupp">Lisa toode MockApi andmebaasi</button>
      </Link>
      <Link to="/add-product">
        <button className="nupp">Add product to my own backend</button>
      </Link>
       <Link to="/add-category">
        <button className="nupp">Add category</button>
      </Link>
    </div>
  )
}

export default LisaHome