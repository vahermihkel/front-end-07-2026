import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function YksAuto() {
    // useParams hooki abil saame kätte URL-i parameetri väärtuse
    // <Route path="/yks-auto/:autoId" <----- element={ <YksAuto /> } />
    const { autoId } = useParams();
    const [auto, setAuto] = useState({});

    useEffect(() => {
        fetch("https://6a917d307751d35ce47e88a4.mockapi.io/autod/" + autoId)
            .then(response => response.json())
            .then(json => setAuto(json));
    }, [autoId]);

  return (
    <div>
        Auto ID keda ma vaatan: {autoId}
        <div>Tootja: {auto.tootja}</div>
        <div>Mark: {auto.mark}</div>
        <div>Hind: {auto.hind}€</div>
        <img src={auto.pilt} alt="" />
        <div>Varv: {auto.varv}</div>
    </div>
  )
}

export default YksAuto