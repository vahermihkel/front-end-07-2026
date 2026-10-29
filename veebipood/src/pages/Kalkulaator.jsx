import LaenuKalkulaator from "../components/LaenuKalkulaator";
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator";
import SaastuKalkulaator from "../components/SaastuKalkulaator";
import TavaKalkulaator from "../components/TavaKalkulaator";

function Kalkulaator() {


  return (
	<div className="kalkulaator">
		<TavaKalkulaator />

		<LaenuKalkulaator />

		<MaksimaalneKalkulaator />

		<SaastuKalkulaator />
	</div>
  )
}

export default Kalkulaator