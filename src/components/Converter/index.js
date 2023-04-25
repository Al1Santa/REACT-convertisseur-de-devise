// == Import
// == Composant
import Header from '../Header';
// Style
import './styles.scss';

// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header />
      <div>Currencies</div>
      <div>Amount</div>
    </div>
  );
}

// == Export
export default Converter;
