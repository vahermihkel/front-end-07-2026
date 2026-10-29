import { Link } from "react-router-dom"

function HaldaHome() {
  return (
    <div>
    	<Link to="/halda-autod">
        <button className="nupp">Autod</button>
      </Link>
			<Link to="/halda-esindused">
        <button className="nupp">Esindused</button>
      </Link>
			<Link to="/halda-hinnad">
        <button className="nupp">Hinnad</button>
      </Link>
			<Link to="/halda-kasutajad">
        <button className="nupp">Kasutajad</button>
      </Link>
			<Link to="/halda-tootajad">
        <button className="nupp">Töötajad</button>
      </Link>
			<Link to="/halda-tooted">
        <button className="nupp">Tooted</button>
      </Link>
    </div>
  )
}

export default HaldaHome