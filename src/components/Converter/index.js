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
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.state = {
      isOpen: false,
      baseAmount: 1,
      currency: 'United States Dollar',
    };
  }

  handleClick() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  handleCurrencyClick(name) {
    this.setState({
      currency: name,
    });
  }

  // Fonction qui retourne le resultat de conversion
  makeConversion() {
    // On recup les données depuis notre state
    const { baseAmount, currency } = this.state;
    // On recup les infos de la devise choisie
    const currencyData = currenciesList.find((item) => item.name === currency);
    // console.log(currenciesList);
    // On extrait le taux de conversion
    const { rate } = currencyData;
    // On fait la conversion
    const result = baseAmount * rate;
    // On limite à 2 décimales
    const formattedResult = Math.round(result * 100) / 100;

    return formattedResult;
  }

  render() {
    // Eslint nous dit qu'il faut faire du destructuring pour utilisé une propriété du state
    const { isOpen, baseAmount, currency } = this.state;

    // On recup le resultat de conversion
    // Pour l'envoyer au composant qui doit l'afficher
    const result = this.makeConversion();
    //  On envoie la fonction handleClick en prop à notre composant toggle
    // car c'est sur ce composant qu'il est exécuté
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toogle open={isOpen} manageClick={this.handleClick} />
        {isOpen && (
          <Currencies
            currencies={currenciesList}
            handleClick={this.handleCurrencyClick}
          />
        )}
        <Amount currency={currency} value={result} />
      </div>
    );
  }
}
// == Export
export default Converter;
