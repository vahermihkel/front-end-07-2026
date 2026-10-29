import { useTranslation } from "react-i18next";

function Tabs() {
  const { t } = useTranslation();

  return (
    <div>
        <button>{t('tabs.home')}</button>
        <button>{t('tabs.calculator')}</button>
        <button>{t('tabs.cart')}</button>
    </div>
  )
}

export default Tabs