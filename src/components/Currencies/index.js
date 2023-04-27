// == Import :npm
import PropTypes from 'prop-types';

// == Import
import Currency from './currency';
// == Style
import './currencies.scss';
// == Composant
function Currencies({
  currencies,
  handleClick,
  searchValue,
  setSearch
}) {
  return (
    <div className="currencies">
      <input
        type="text"
        className="currencies-search"
        placeholder="Rechercher"
        value={searchValue}
        onChange={(event) => {
          console.log(`onChange : ${event.currentTarget.value}`);
          setSearch(event.currentTarget.value);
        }}
      />
      <ul>
        {currencies.map((currency) => (
          // {...currency} : Spread Opérator
          // => Permet de dévérser le contenu de la variable dans le composant
          // Revient à écrire
          // <Currency name={currency.name} rate={currency.rate} />
          <Currency {...currency} click={handleClick} key={currency.name} />
        ))}
      </ul>
    </div>
  );
}
//  40 minutes ep 2
Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      // on ne valide que les données que l'on utilise
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
// == Export
export default Currencies;
