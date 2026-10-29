import { useEffect, useState } from "react";

function Pakiautomaadid() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    const fetchParcelMachines = async () => {
      const response = await fetch("https://www.omniva.ee/locations.json");
      const data = await response.json();
      setParcelMachines(data);
    }

    fetchParcelMachines();
  }, []);

  return (
    <div>
      <select>
        {parcelMachines.map((pm, index) => <option key={index}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}

export default Pakiautomaadid