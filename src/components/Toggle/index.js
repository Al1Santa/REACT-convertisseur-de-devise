// == Import : npm
import PropTypes from 'prop-types';
// == Import
import './toggle.scss';

// == Composant
function Toogle({ open }) {
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
      // onClick={this.handleClick}
    >
      =
    </button>
  );
}
Toogle.propTypes = {
  open: PropTypes.bool.isRequired,
};
// == Export
export default Toogle;
