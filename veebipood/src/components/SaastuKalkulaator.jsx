import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function SaastuKalkulaator() {
	const { t } = useTranslation();
	const palkRef = useRef();
	const lisatuluRef = useRef();
	const muuTuluRef = useRef();

	const uurRef = useRef();
	const toitRef = useRef();
	const transportRef = useRef();
	const kommunaalidRef = useRef();
	const meelelahutusRef = useRef();
	const muudKuludRef = useRef();

	const [tuludKokku, setTuludKokku] = useState(0);
	const [kuludKokku, setKuludKokku] = useState(0);
	const [saastuSumma, setSaastuSumma] = useState(0);

	const arvutaKokku = () => {
		const tulud = Number(palkRef.current.value) + Number(lisatuluRef.current.value) + Number(muuTuluRef.current.value);

		const kulud = Number(uurRef.current.value) + Number(toitRef.current.value) + Number(transportRef.current.value) +
				Number(kommunaalidRef.current.value) + Number(meelelahutusRef.current.value) + Number(muudKuludRef.current.value);

		setTuludKokku(tulud);
		setKuludKokku(kulud);

		setSaastuSumma(tulud - kulud);
	}

	return (
		<div className="kalkulaator-kaart">
			<h2>{t('savings_calc.title')}</h2>
			<h3>{t('savings_calc.income')}</h3>
			<label>{t('savings_calc.salary')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={palkRef} type="number" /> <br />
			<label>{t('savings_calc.extra_income')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={lisatuluRef} type="number" /> <br />
			<label>{t('savings_calc.other_income')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={muuTuluRef} type="number" /> <br />

			<h3>{t('savings_calc.expenses')}</h3>
			<label>{t('savings_calc.rent')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={uurRef} type="number" /> <br />
			<label>{t('savings_calc.food')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={toitRef} type="number" /> <br />
			<label>{t('savings_calc.transport')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={transportRef} type="number" /> <br />
			<label>{t('savings_calc.utilities')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={kommunaalidRef} type="number" /> <br />
			<label>{t('savings_calc.entertainment')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={meelelahutusRef} type="number" /> <br />
			<label>{t('savings_calc.other_expenses')}</label>
			<input defaultValue="0" onChange={arvutaKokku} ref={muudKuludRef} type="number" /> <br />

			<h3>{t('savings_calc.summary')}</h3>
			<div className="tulemus-rida">{t('savings_calc.income_total')} {tuludKokku}€</div>
			<div className="tulemus-rida">{t('savings_calc.expenses_total')} {kuludKokku}€</div>
			<div className="tulemus">{t('savings_calc.savings_result')} {saastuSumma}€</div>
		</div>
	)
}

export default SaastuKalkulaator
