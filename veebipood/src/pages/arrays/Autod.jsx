import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AutoSortButtons from "../../components/AutoSortButtons";
import AutoFilterButtons from "../../components/AutoFilterButtons";
import { KogusummaContext } from "../../context/KogusummaContext";

function Autod() {
	const [autod, setAutod] = useState([]);
	const {kogusumma, setKogusumma} = useContext(KogusummaContext);

	useEffect(() => {
		fetch("https://6a917d307751d35ce47e88a4.mockapi.io/autod")
			.then(response => response.json())
			.then(json => setAutod(json));
	}, []);

	// tähestiku järgi järjekorda - localeCompare
	// numbrite järgi järjekorda - üks miinus teine

	


	function reset() {
		fetch("https://6a917d307751d35ce47e88a4.mockapi.io/autod")
			.then(response => response.json())
			.then(json => setAutod(json));
	}

	function lisaOstukorvi(auto) {
		const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
		ostukorvLS.push(auto);
		localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
		setKogusumma(kogusumma + Number(auto.hind));
	}

	// 1. võtan andmed LocalStorage-st (localStorage.getItem("ostukorv"))
	// 2. võtan jutumärgid maha (JSON.parse)
	// 3. lisan uue auto ostukorvi (push)
	// 4. panen jutumärgid tagasi (JSON.stringify)
	// 5. panen LocalStorage-sse tagasi (localStorage.setItem("ostukorv", ...))

  return (
    <div>
			<div>{autod.length}tk</div>
			<button onClick={reset}>Võta filtrid maha</button>
			<br /><br />
			<AutoSortButtons autod={autod} setAutod={setAutod} />
			<br /><br />
			<AutoFilterButtons autod={autod} setAutod={setAutod} />
			<br /><br />
			<div>
				{autod.map(auto => 
					<div key={auto.id}>
						{auto.id}: {auto.mark} ({auto.tootja}) - {auto.hind}€
						<Link to={"/yks-auto/" + auto.id}>
							<button>Vt lähemalt</button>
						</Link>
						<button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
					</div>)}
			</div>
		</div>
  )
}

export default Autod