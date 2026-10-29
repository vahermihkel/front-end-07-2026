import { Link } from "react-router-dom"
import { FaShoppingCart, FaGift, FaCog, FaMapMarkerAlt, FaCalculator, FaListUl, FaTools, FaPlus, FaCode, FaSun, FaMoon } from "react-icons/fa"
import { useTranslation } from 'react-i18next';

function MenuLinks({toggleDrawer, cssClass, tume, vahetaTeema}) {
  const { t, i18n } = useTranslation();

  const updateLanguage = (lng) => {
    i18n.changeLanguage(lng); // see rida muudab keelt
    localStorage.setItem("language", lng); // salvestab keele valiku localStorage'i
  }

  return (
    <div className={cssClass} onClick={toggleDrawer(false)}>
        <Link to="/ostukorv">
          <button className="nupp"><FaShoppingCart /> {t('menu.cart')}</button>
        </Link>

        <Link to="/osta-kinkekaart">
          <button className="nupp"><FaGift /> {t('menu.gift_card')}</button>
        </Link>

        <Link to="/seaded">
          <button className="nupp"><FaCog /> {t('menu.settings')}</button>
        </Link>

        <Link to="/esindused">
          <button className="nupp"><FaMapMarkerAlt /> {t('menu.stores')}</button>
        </Link>

        <Link to="/kalkulaator">
          <button className="nupp"><FaCalculator /> {t('menu.calculator')}</button>
        </Link>

        <Link to="/arrays">
          <button className="nupp"><FaListUl /> {t('menu.arrays')}</button>
        </Link>

        <Link to="/halda">
          <button className="nupp"><FaTools /> {t('menu.manage')}</button>
        </Link>

        <Link to="/lisa">
          <button className="nupp"><FaPlus /> Kõikvõimalikke asju lisama</button>
        </Link>

        <Link to="/api">
          <button className="nupp"><FaCode /> {t('menu.api')}</button>
        </Link>

        <button className="nupp" onClick={() => updateLanguage('en')}>
          EN
        </button>
        <button className="nupp" onClick={() => updateLanguage('et')}>
          ET
        </button>
        <button className="nupp" onClick={() => updateLanguage('es')}>
          ES
        </button>

        <button className="nupp" onClick={vahetaTeema}>
          {tume === "true" ? <span><FaSun /> Hele</span> : <span><FaMoon /> Tume</span>}
        </button>
    </div>
  )
}

export default MenuLinks