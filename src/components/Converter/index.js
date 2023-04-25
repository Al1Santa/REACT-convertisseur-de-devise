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
  // par défaut les devises ne sont pas affichées
  let isOpen = false;

  const handleClick = () => {
    console.log(`open avant le click : ${isOpen}`);
    isOpen = true;
    console.log(`open après le click : ${isOpen}`);
  };

  return (
    <div className="converter">
      <Header baseAmount={1} />
      <button type="button" onClick={handleClick}>Afficher / Cacher les devises </button>
      {isOpen && <Currencies currencies={currenciesList} />}
      <Amount currency="United States Dollar" value={1.09} />
    </div>
  );
}

// == Export
export default Converter;
