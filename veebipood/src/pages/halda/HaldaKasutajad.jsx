import { useState } from "react";

function HaldaKasutajad() {
  const [kasutajad, setKasutajad] = useState([
    {"email": "a@a.com", "nimi": "Albert"},
    {"email": "m@m.com", "nimi": "Mattias"},
    {"email": "c@c.com", "nimi": "Chris"}
  ]);

  // const [kasutajad, setKasutajad] = useState([
  //  "a@a.com",
  //  "m@m.com",
  //  "c@c.com"
  // ]);

  function kustuta(index) {
    kasutajad.splice(index,1);
    setKasutajad(kasutajad.slice());
  }

  return (
    <div>
       <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Kasutaja email</th>
                    <th>Kasutaja nimi</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {kasutajad.map((kasutaja, index) => 
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{kasutaja.email}</td>
                        <td>{kasutaja.nimi}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaKasutajad