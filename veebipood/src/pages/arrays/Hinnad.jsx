import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Hinnad() {
	const [hinnad, setHinnad] = useState([]);

	useEffect(() => {
		fetch("https://6a917d307751d35ce47e88a4.mockapi.io/hinnad")
			.then(response => response.json())
			.then(json => setHinnad(json));
	}, []);

	function reset() {
		fetch("https://6a917d307751d35ce47e88a4.mockapi.io/hinnad")
			.then(response => response.json())
			.then(json => setHinnad(json));
	}

	function sorteeriKasvavalt() {
		hinnad.sort((a, b) => a.arv - b.arv);
		setHinnad(hinnad.slice());
	}

	function sorteeriKahanevalt() {
		hinnad.sort((a, b) => b.arv - a.arv);
		setHinnad(hinnad.slice());
	}

	function filtreeriVaiksemadKui500() {
		const vastus = hinnad.filter(hind => hind.arv < 500);
		setHinnad(vastus);
	}

	function filtreeriSuuremadKui2000() {
		const vastus = hinnad.filter(hind => hind.arv > 2000);
		setHinnad(vastus);
	}

  return (
    <div>
		<div>Kokku hindu: {hinnad.length} tk</div>
		<button onClick={reset}>Reset</button>
		<br />
		<button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
		<button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
		<br />
		<button onClick={filtreeriVaiksemadKui500}>Jäta alles väiksemad kui 500</button>
		<button onClick={filtreeriSuuremadKui2000}>Jäta alles suuremad kui 2000</button>
        {hinnad.map(hind => 
			<div key={hind.id}>
			 {hind.arv} ({hind.sonana})
			  <Link to={"/yks-hind/" + hind.id}>
			  	<button>Vt detailsemalt</button>
			  </Link>
			</div>)}
    </div>
  )
}

export default Hinnad