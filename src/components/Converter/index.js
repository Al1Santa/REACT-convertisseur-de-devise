// == Import
// == Composant
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
// Style
import './styles.scss';


// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies />
      <Amount />
    </div>
  );
}

// == Export
export default Converter;
