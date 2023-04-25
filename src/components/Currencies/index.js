// == Import :npm 
import PropTypes from 'prop-types';

// == Import
import Currency from './currency';
// == Style
import './currencies.scss';
// == Composant
function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <p className="currencies-title">Currencies</p>
      <ul>
        {currencies.map((currency) => (
          // {...currency} : Spread Opérator
          // => Permet de dévérser le contenu de la variable dans le composant
          // Revient à écrire
          // <Currency name={currency.name} rate={currency.rate} />
          <Currency {...currency} key={currency.name} />
        ))}
      </ul>
    </div>
  );
}

Currencies.prototype = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      // on ne valide que les données que l'on utilise
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default Currencies;
