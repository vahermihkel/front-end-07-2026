import { useEffect, useState } from "react";

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState([]);

    useEffect(() => {
        fetch("https://6a917d307751d35ce47e88a4.mockapi.io/hinnad")
            .then(response => response.json())
            .then(json => setHinnad(json));
    }, []);

    function kustuta(index, id) {
        hinnad.splice(index,1);
        setHinnad(hinnad.slice());
        fetch("https://6a917d307751d35ce47e88a4.mockapi.io/hinnad/" + id, {method: "DELETE"})
    } 

  return (
    <div>
        <div>Kokku hindu: {hinnad.length} tk</div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Hind</th>
                    <th>Hind sõnana</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {hinnad.map((hind, index) => 
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{hind.arv}</td>
                        <td>{hind.sonana}</td>
                        <td><button onClick={() => kustuta(index, hind.id)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad