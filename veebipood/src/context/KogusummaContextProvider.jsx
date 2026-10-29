import { useState } from "react";
import { KogusummaContext } from "./KogusummaContext";


export const KogusummaContextProvider = ({children}) => {
    const [kogusumma, setKogusumma] = useState(arvutaKogusumma());

    function arvutaKogusumma() {
        const tooted = JSON.parse(localStorage.getItem("ostukorv")) || [];
        let kogusumma = 0;
        tooted.forEach(toode => kogusumma = kogusumma + Number(toode.hind));
        return kogusumma;
    }

    return (
        <KogusummaContext.Provider value={{kogusumma, setKogusumma}}>
            {children}
        </KogusummaContext.Provider>
    )
}