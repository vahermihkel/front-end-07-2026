import { useState } from "react";
import { useTranslation } from "react-i18next";

function TavaKalkulaator() {
const { t } = useTranslation();
const [nr1, setNr1] = useState(0);
	const [operator, setOperator] = useState("");
	const [nr2, setNr2] = useState(undefined);
	const [result, setResult] = useState(undefined);

	const setNr = (uusNr) => {
		if (operator === "") {
			setNr1(uusNr);
		} else {
			setNr2(uusNr);
		}
	}

	const reset = () => {
		setNr1(0);
		setOperator("");
		setNr2(undefined);
		setResult(undefined);
	}

	const calculateResult = () => {
		if (operator === "+") {
			setResult(nr1 + nr2);
		} else if (operator === "-") {
			setResult(nr1 - nr2);
		} else if (operator === "x") {
			setResult(nr1 * nr2);
		} else if (operator === "/") {
			setResult(nr1 / nr2);
		}
	}


  return (
    <div className="kalkulaator-kaart">
		<h2>{t('simple_calc.title')}</h2>
        <div className="ekraan">{nr1} {operator} {nr2 !== undefined && nr2} {result !== undefined && <span> = </span>} {result}</div>
		<div className="tava-nupud">
			<button onClick={() => setNr(7)}>7</button>
			<button onClick={() => setNr(8)}>8</button>
			<button onClick={() => setNr(9)}>9</button>
			<button onClick={() => setOperator("x")}>x</button>

			<button onClick={() => setNr(4)}>4</button>
			<button onClick={() => setNr(5)}>5</button>
			<button onClick={() => setNr(6)}>6</button>
			<button onClick={() => setOperator("-")}>-</button>

			<button onClick={() => setNr(1)}>1</button>
			<button onClick={() => setNr(2)}>2</button>
			<button onClick={() => setNr(3)}>3</button>
			<button onClick={() => setOperator("+")}>+</button>

			<button onClick={() => reset()}>C</button>
			<button onClick={() => setNr(0)}>0</button>
			<button onClick={() => setOperator("/")}>/</button>
			<button onClick={() => calculateResult()}>=</button>
		</div>
    </div>
  )
}

export default TavaKalkulaator