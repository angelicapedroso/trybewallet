import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrencyInput extends Component {
  render() {
    const { handleChange, currenciesList, currency } = this.props;
    return (
      <label htmlFor="currency-id">
        Moeda:
        <select
          id="currency-id"
          name="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ handleChange }
        >
          { currenciesList !== undefined && currenciesList.map((coin) => (
            <option value={ coin } key={ coin }>{ coin }</option>
          )) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesList: state.wallet.currencies,
});

CurrencyInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currenciesList: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(CurrencyInput);

// help from: João Victor Veidz, Rivaldo Maciel e Joel Almeida
