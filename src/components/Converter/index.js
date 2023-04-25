// == Import
// == Data
import currenciesList from 'src/data/currencies';
// == Composant
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
// Style
import './styles.scss';

// console.log(currenciesList);

// == Composant
function Converter() {
  const isOpen = false;
  return (
    <div className="converter">
      <Header baseAmount={1} />
      {isOpen && <Currencies currencies={currenciesList} />}
      <Amount currency="United States Dollar" value={1.09} />
    </div>
  );
}

// == Export
export default Converter;
