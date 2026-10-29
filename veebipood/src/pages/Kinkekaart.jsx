import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Kinkekaart() {
  //    muudetav  muutja          algväärtus
  const [summa, setSumma] = useState(20); // useState is not defined ----> importimata
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();
  const { t } = useTranslation();
  
  function sisesta() {
    if (emailRef.current.value === "") {
      alert("Tühja emaili ei saa sisestada!");
    } else {
      alert("Email sisestatud!");
    }
  }

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => setSumma(20)}>20</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => setSumma(50)}>50</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => setSumma(100)}>100</button>
      <div>{t("giftcards.total")}: {summa} €</div>
      <br />
      <br />
      <button disabled={kogus <= 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>
      <br />
      <br />
      <div>{t("giftcards.total")}: {summa * kogus}€</div>
      <br />
      <br />
      <label>{t("giftcards.email")}</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={() => sisesta()}>{t("giftcards.insert")}</button> <br />
    </div>
  )
}

export default Kinkekaart