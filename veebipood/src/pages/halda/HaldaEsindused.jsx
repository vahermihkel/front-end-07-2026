import { useState } from "react";

function HaldaEsindused() {
    const [esindused, setEsindused] = useState([
        {"keskus": "Rocca al Mare", "tel": "512321321", "aadress": "Loomaaia 55"}, 
        {"keskus": "Kristiine", "tel": "512321312", "aadress": "Endla 123"}, 
        {"keskus": "Järveotsa", "tel": "51232155", "aadress": "Järve 777"}, 
        {"keskus": "Ülemiste", "tel": "5123213457", "aadress": "Suur-Sõjamäe 65"}, 
        {"keskus": "Vesse", "tel": "51232432", "aadress": "Vesi 5"}, 
        {"keskus": "Magistrali", "tel": "512321323", "aadress": "Mäe 321"}
    ])

    function kustuta(index) {
        esindused.splice(index,1);
        setEsindused(esindused.slice());
    } 

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Esinduse nimi</th>
                    <th>Esinduse telefon</th>
                    <th>Esinduse aadress</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {esindused.map((esindus, index) => 
                    <tr key={esindus.keskus}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{esindus.keskus}</td>
                        <td>{esindus.tel}</td>
                        <td>{esindus.aadress}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaEsindused