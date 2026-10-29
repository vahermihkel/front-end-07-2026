import { useEffect, useState } from "react";

function HaldaAutod() {
    const [autod, setAutod] = useState([]);

    useEffect(() => {
        fetch("https://6a917d307751d35ce47e88a4.mockapi.io/autod")
            .then(response => response.json())
            .then(json => setAutod(json));
    }, []);

  function kustuta(index, id) {
    autod.splice(index,1);
    setAutod(autod.slice());
    fetch("https://6a917d307751d35ce47e88a4.mockapi.io/autod/" + id, {method: "DELETE"});
  } 

  if (autod.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <div>{autod.length}tk</div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Auto ID</th>
                    <th>Auto tootja</th>
                    <th>Auto mark</th>
                    <th>Auto hind</th>
                    <th>Auto värv</th>
                    <th>Auto värv eesti keeles</th>
                    <th>Auto pilt</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {autod.map((auto, index) => 
                    <tr key={auto.id}>
                        <td>{index}</td>
                        <td>{auto.id}</td>
                        <td>{auto.tootja}</td>
                        <td>{auto.mark}</td>
                        <td>{auto.hind}</td>
                        <td>{auto.varv}</td>
                        <td>{auto.varvEST}</td>
                        <td>{auto.pilt}</td>
                        <td><button onClick={() => kustuta(index, auto.id)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaAutod