import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "menu": {
        "cart": "Shopping Cart",
        "gift_card": "Gift Card",
        "add_product": "Add Product",
        "settings": "Settings",
        "stores": "Stores",
        "calculator": "Calculator",
        "arrays": "Arrays",
        "manage": "Manage",
        "add": "Add",
        "api": "API",
        "total_amount": "Total amount:"
      },
      "giftcards": {
        "total": "Total",
        "email": "Email",
        "insert": "Insert"
      },
      "common": {
        "years": "years"
      },
      "tabs": {
        "home": "Home",
        "calculator": "Calculator",
        "cart": "Cart"
      },
      "loan_calc": {
        "title": "Loan calculator",
        "purchase_price": "Real estate purchase price",
        "down_payment": "Down payment",
        "loan_amount": "Loan amount",
        "period": "Period",
        "margin": "Margin",
        "euribor": "Euribor",
        "interest_total": "Interest total",
        "monthly_payment": "Monthly loan payment:"
      },
      "max_loan": {
        "title": "Maximum loan limit",
        "dependents": "Number of dependents",
        "net_income": "Net income",
        "monthly_obligations": "Monthly obligations",
        "max_limit": "Maximum limit:"
      },
      "simple_calc": {
        "title": "Simple calculator"
      },
      "savings_calc": {
        "title": "Savings calculator",
        "income": "Income",
        "salary": "Salary",
        "extra_income": "Extra income",
        "other_income": "Other income",
        "expenses": "Expenses",
        "rent": "Rent / loan payment",
        "food": "Food",
        "transport": "Transport",
        "utilities": "Utilities",
        "entertainment": "Entertainment",
        "other_expenses": "Other expenses",
        "summary": "Summary",
        "income_total": "Income total:",
        "expenses_total": "Expenses total:",
        "savings_result": "You can save monthly:"
      },
      "makse": {
        "pay": "Pay"
      },
      "autosort": {
        "az": "Sort brand A-Z",
        "za": "Sort brand Z-A",
        "letters_asc": "Sort by brand letter count ascending",
        "letters_desc": "Sort by brand letter count descending",
        "third_letter": "Sort by manufacturer's third letter"
      },
      "autofilter": {
        "cheaper_than_80000": "Keep only cheaper than 80 000",
        "more_expensive_than_25000": "Keep only more expensive than 25 000",
        "ends_with_a": "Keep only those ending with letter a",
        "more_than_10_letters": "Keep only those with more than 10 letters",
        "second_letter_o": "Keep only those with second letter O"
      }
    }
  },
  et: {
    translation: {
      "menu": {
        "cart": "Ostukorv",
        "gift_card": "Kinkekaart",
        "add_product": "Lisa toode",
        "settings": "Seaded",
        "stores": "Esindused",
        "calculator": "Kalkulaator",
        "arrays": "Arrays",
        "manage": "Halda",
        "add": "Lisa",
        "api": "API",
        "total_amount": "Kogusumma:"
      },
      "giftcards": {
        "total": "Kokku",
        "email": "E-mail",
        "insert": "Sisesta"
      },
      "common": {
        "years": "aastat"
      },
      "tabs": {
        "home": "Avalehele",
        "calculator": "Kalkulaator",
        "cart": "Ostukorv"
      },
      "loan_calc": {
        "title": "Laenukalkulaator",
        "purchase_price": "Kinnisvara ostuhind",
        "down_payment": "Sissemakse",
        "loan_amount": "Laenusumma",
        "period": "Periood",
        "margin": "Marginaal",
        "euribor": "Euribor",
        "interest_total": "Intress kokku",
        "monthly_payment": "Laenu kuumakse:"
      },
      "max_loan": {
        "title": "Maksimaalne laenulimiit",
        "dependents": "Ülalpeetavate arv",
        "net_income": "Netosissetulek",
        "monthly_obligations": "Igakuised kohustused",
        "max_limit": "Maksimaalne limiit:"
      },
      "simple_calc": {
        "title": "Lihtne kalkulaator"
      },
      "savings_calc": {
        "title": "Säästukalkulaator",
        "income": "Tulud",
        "salary": "Palk",
        "extra_income": "Lisatulu",
        "other_income": "Muu tulu",
        "expenses": "Kulud",
        "rent": "Üür / laenumakse",
        "food": "Toit",
        "transport": "Transport",
        "utilities": "Kommunaalid",
        "entertainment": "Meelelahutus",
        "other_expenses": "Muud kulud",
        "summary": "Kokkuvõte",
        "income_total": "Tulud kokku:",
        "expenses_total": "Kulud kokku:",
        "savings_result": "Saad kuus säästa:"
      },
      "makse": {
        "pay": "Maksa"
      },
      "autosort": {
        "az": "Sorteeri mark A-Z",
        "za": "Sorteeri mark Z-A",
        "letters_asc": "Sorteeri margi tähtede arv kasvavalt",
        "letters_desc": "Sorteeri margi tähtede arv kahanevalt",
        "third_letter": "Sorteeri tootja kolmanda tähe järgi"
      },
      "autofilter": {
        "cheaper_than_80000": "Jäta alles odavamad kui 80 000",
        "more_expensive_than_25000": "Jäta alles kallimad kui 25 000",
        "ends_with_a": "Jäta alles kes lõppevad a-tähega",
        "more_than_10_letters": "Jäta alles kellel on rohkem kui 10 tähemärki",
        "second_letter_o": "Jäta alles kellel on teine täht O"
      }
    }
  },
  es: {
    translation: {
      "menu": {
        "cart": "Carrito de compras",
        "gift_card": "Tarjeta de regalo",
        "add_product": "Añadir producto",
        "settings": "Ajustes",
        "stores": "Tiendas",
        "calculator": "Calculadora",
        "arrays": "Arrays",
        "manage": "Gestionar",
        "add": "Añadir",
        "api": "API",
        "total_amount": "Importe total:"
      },
      "giftcards": {
        "total": "Total",
        "email": "Correo electrónico",
        "insert": "Insertar"
      },
      "common": {
        "years": "años"
      },
      "tabs": {
        "home": "Inicio",
        "calculator": "Calculadora",
        "cart": "Carrito"
      },
      "loan_calc": {
        "title": "Calculadora de préstamo",
        "purchase_price": "Precio de compra del inmueble",
        "down_payment": "Pago inicial",
        "loan_amount": "Importe del préstamo",
        "period": "Plazo",
        "margin": "Margen",
        "euribor": "Euribor",
        "interest_total": "Interés total",
        "monthly_payment": "Cuota mensual del préstamo:"
      },
      "max_loan": {
        "title": "Límite máximo de préstamo",
        "dependents": "Número de dependientes",
        "net_income": "Ingreso neto",
        "monthly_obligations": "Obligaciones mensuales",
        "max_limit": "Límite máximo:"
      },
      "simple_calc": {
        "title": "Calculadora simple"
      },
      "savings_calc": {
        "title": "Calculadora de ahorros",
        "income": "Ingresos",
        "salary": "Salario",
        "extra_income": "Ingreso adicional",
        "other_income": "Otro ingreso",
        "expenses": "Gastos",
        "rent": "Alquiler / cuota de préstamo",
        "food": "Comida",
        "transport": "Transporte",
        "utilities": "Servicios",
        "entertainment": "Entretenimiento",
        "other_expenses": "Otros gastos",
        "summary": "Resumen",
        "income_total": "Ingresos totales:",
        "expenses_total": "Gastos totales:",
        "savings_result": "Puedes ahorrar al mes:"
      },
      "makse": {
        "pay": "Pagar"
      },
      "autosort": {
        "az": "Ordenar marca A-Z",
        "za": "Ordenar marca Z-A",
        "letters_asc": "Ordenar por número de letras de la marca ascendente",
        "letters_desc": "Ordenar por número de letras de la marca descendente",
        "third_letter": "Ordenar por la tercera letra del fabricante"
      },
      "autofilter": {
        "cheaper_than_80000": "Mantener solo más baratos que 80 000",
        "more_expensive_than_25000": "Mantener solo más caros que 25 000",
        "ends_with_a": "Mantener solo los que terminan en la letra a",
        "more_than_10_letters": "Mantener solo los que tienen más de 10 letras",
        "second_letter_o": "Mantener solo los que tienen la segunda letra O"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;