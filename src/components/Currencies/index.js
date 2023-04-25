// == Import
import './currencies.scss';
// == Composant
function Currencies() {
  return (
    <div className="currencies">
      <p className="currencies-title">Currencies</p>
      <ul>
        <li className="currency">USD</li>
        <li className="currency">EURO</li>
        <li className="currency">YEN</li>
      </ul>
    </div>
  );
}
// == Export
export default Currencies;
