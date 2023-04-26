// == Import : npm
import PropTypes from 'prop-types';
// == Import
import './toggle.scss';

// == Composant
function Toogle({ open, manageClick }) {
  // open ? cssClass = 'toggle toggle--open' : cssClass = 'toogle';
  let cssClass;
  if (open) {
    cssClass = 'toggle toggle--open';
  }
  else {
    cssClass = 'toggle';
  }

  return (
    <button
      className={cssClass}
      type="button"
      onClick={manageClick}
    >
      =
    </button>
  );
}
Toogle.propTypes = {
  open: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};
// == Export
export default Toogle;
