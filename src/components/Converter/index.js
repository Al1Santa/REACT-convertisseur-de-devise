// == Import
// == Composant
import Header from '../Header';
import Currencies from '../Currencies';
// Style
import './styles.scss';

// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies />
      <div>Amount</div>
    </div>
  );
}

// == Export
export default Converter;
