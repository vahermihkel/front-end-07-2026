import { useTranslation } from "react-i18next";

function Makse({summa}) {
  const { t } = useTranslation();

 async function pay() {
    const response = await fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
      },
      body: JSON.stringify({
        "account_name": "EUR3D1",
        "timestamp": new Date(),
        "nonce": new Date() + Math.random(),
        "amount": summa,
        "order_reference": "ORDER-" + Math.random(),
        "customer_url": "https://yourwebsite.com/payment-callback",
        "api_username": "e36eb40f5ec87fa2",
      })
    });
    const data = await response.json();
    window.location.href = data.payment_link;
  }


  return (
    <div>
        <button onClick={() => pay()}>{t('makse.pay')}</button>
    </div>
  )
}

export default Makse