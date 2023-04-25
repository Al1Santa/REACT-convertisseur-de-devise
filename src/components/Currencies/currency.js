// == Import: npm
import PropTypes from 'prop-types';

// ==  Composant
function Currency({ name }) {
  return (
    <li className="currency">{name}</li>
  );
}

Currency.prototype = {
  name: PropTypes.string.isRequired,
};
// == Export
export default Currency;
