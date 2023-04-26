// == Import npm
import React from 'react';

// == Import local

// == Data
import currenciesList from 'src/data/currencies';
// == Composant
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toogle from '../Toggle';
// Style
import './styles.scss';

// console.log(currenciesList);

// == Composant
class Converter extends React.Component {
  // par défaut les devises ne sont pas affichées
  // let isOpen = false;
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    // Eslint nous dit qu'il faut faire du destructuring pour utilisé une propriété du state
    const { isOpen } = this.state;

    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toogle open={isOpen} />
        {isOpen && <Currencies currencies={currenciesList} />}
        <Amount currency="United States Dollar" value={1.09} />
      </div>
    );
}
}
// == Export
export default Converter;
