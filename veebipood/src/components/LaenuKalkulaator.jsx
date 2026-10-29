import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function LaenuKalkulaator() {
  const { t } = useTranslation();
  const ostuhindRef = useRef();
	const sissemakseRef = useRef();
	const perioodRef = useRef();
	const marginaalRef = useRef();
	const euriborRef = useRef();
	const [kuumakse, setKuumakse] = useState(298.61);
	const [intressKokku, setIntressKokku] = useState(4.3);
	const [laenusumma, setLaenusumma] = useState(0);


	const arvutaKokku = () => {
		setIntressKokku(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
		setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);

		setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) / perioodRef.current.value / 12 *
				(Number(marginaalRef.current.value) + Number(euriborRef.current.value)) / 3);
	}

  return (
    <div className="kalkulaator-kaart">
			<h2>{t('loan_calc.title')}</h2>
			<label>{t('loan_calc.purchase_price')}</label>
			<input defaultValue="75000" onChange={arvutaKokku} ref={ostuhindRef} type="number" /> <br />
			<label>{t('loan_calc.down_payment')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={sissemakseRef} type="number" /> <br />
			<label>{t('loan_calc.loan_amount')}</label>
			<input disabled value={laenusumma} type="number" /> <br />
			<label>{t('loan_calc.period')}</label>
			{/* <input defaultValue="30" onChange={arvutaKokku} ref={perioodRef} type="number" /> <br /> */}
			<select defaultValue="30" onChange={arvutaKokku} ref={perioodRef}>
				<option value="5">5 {t('common.years')}</option>
				<option value="10">10 {t('common.years')}</option>
				<option value="15">15 {t('common.years')}</option>
				<option value="20">20 {t('common.years')}</option>
				<option value="25">25 {t('common.years')}</option>
				<option value="30">30 {t('common.years')}</option>
			</select> <br />
			<label>{t('loan_calc.margin')}</label>
			<input defaultValue="1.6" onChange={arvutaKokku} ref={marginaalRef} type="number" /> <br />
			<label>{t('loan_calc.euribor')}</label>
			<input defaultValue="2.7" onChange={arvutaKokku} ref={euriborRef} type="number" /> <br />
			<label>{t('loan_calc.interest_total')}</label>
			<input disabled value={intressKokku.toFixed(2)} type="number" /> <br />
			<div className="tulemus">{t('loan_calc.monthly_payment')} {kuumakse.toFixed(2)}€</div>
		</div>
  )
}

export default LaenuKalkulaator