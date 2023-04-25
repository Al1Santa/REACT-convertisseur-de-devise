// == Import
import Currency from './currency';
// == Style
import './currencies.scss';
// == Composant
function Currencies() {
  return (
    <div className="currencies">
      <p className="currencies-title">Currencies</p>
      <ul>
        <Currency />
      </ul>
    </div>
  );
}
// == Export
export default Currencies;
