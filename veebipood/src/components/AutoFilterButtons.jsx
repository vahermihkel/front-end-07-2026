import { useTranslation } from "react-i18next";

function AutoFilterButtons({autod, setAutod}) {
    const { t } = useTranslation();

	function filtreeriOdavamadKui80000() {
		const vastus = autod.filter(auto => auto.hind < 800);
		setAutod(vastus);
	}

	function filtreeriKallimadKui25000() {
		const vastus = autod.filter(auto => auto.hind > 250);
		setAutod(vastus);
	}

	function filtreeriLoppebTahegaA() {
		const vastus = autod.filter(auto => auto.mark.endsWith("a"));
		setAutod(vastus);
	}

	function filtreeriRohkemKui10Tahte() {
		const vastus = autod.filter(auto => auto.mark.length > 10);
		setAutod(vastus);
	}

	function filtreeriKellelTeineTahtO() {					   // 012345678901
		const vastus = autod.filter(auto => auto.mark[1] === "o");  // Ford Mustang
		setAutod(vastus);
	}

  return (
    <div>
        <button onClick={filtreeriOdavamadKui80000}>{t('autofilter.cheaper_than_80000')}</button>
        <button onClick={filtreeriKallimadKui25000}>{t('autofilter.more_expensive_than_25000')}</button>
        <button onClick={filtreeriLoppebTahegaA}>{t('autofilter.ends_with_a')}</button>
        <button onClick={filtreeriRohkemKui10Tahte}>{t('autofilter.more_than_10_letters')}</button>
        <button onClick={filtreeriKellelTeineTahtO}>{t('autofilter.second_letter_o')}</button>
    </div>
  )
}

export default AutoFilterButtons