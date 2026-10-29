import { useTranslation } from "react-i18next";

function MaksimaalneKalkulaator() {
  const { t } = useTranslation();

  return (
    <div className="kalkulaator-kaart">
        <h2>{t('max_loan.title')}</h2>
        <label>{t('max_loan.dependents')}</label>
        <input type="number" /> <br />
        <label>{t('max_loan.net_income')}</label>
        <input type="number" /> <br />
        <label>{t('max_loan.monthly_obligations')}</label>
        <input type="number" /> <br />
        <div className="tulemus">{t('max_loan.max_limit')} xxx€</div>
    </div>
  )
}

export default MaksimaalneKalkulaator