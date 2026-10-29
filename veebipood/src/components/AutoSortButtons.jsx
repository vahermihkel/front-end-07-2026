import { useTranslation } from "react-i18next";

function AutoSortButtons({autod, setAutod}) {
    const { t } = useTranslation();

    function sorteeriAZ() {
		autod.sort((a,b) => a.mark.localeCompare(b.mark));
		setAutod(autod.slice());
	}

	function sorteeriZA() {
		autod.sort((a,b) => b.mark.localeCompare(a.mark));
		setAutod(autod.slice());
	}

	function sorteeriTahedKasvavalt() {
		autod.sort((a,b) => a.mark.length - b.mark.length);
		setAutod(autod.slice());
	}

	function sorteeriTahedKahanevalt() {
		autod.sort((a,b) => b.mark.length - a.mark.length);
		setAutod(autod.slice());
	}

	function sorteeriKolmasTahtAZ() {
		autod.sort((a,b) => a.tootja[1].localeCompare(b.tootja[1]));
		setAutod(autod.slice());
	}

  return (
    <div>
        <button onClick={sorteeriAZ}>{t('autosort.az')}</button>
        <button onClick={sorteeriZA}>{t('autosort.za')}</button>
        <button onClick={sorteeriTahedKasvavalt}>{t('autosort.letters_asc')}</button>
        <button onClick={sorteeriTahedKahanevalt}>{t('autosort.letters_desc')}</button>
        <button onClick={sorteeriKolmasTahtAZ}>{t('autosort.third_letter')}</button>
    </div>
  )
}

export default AutoSortButtons