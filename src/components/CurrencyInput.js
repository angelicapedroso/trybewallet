import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CurrencyInput extends Component {
  render() {
    const { currency, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ handleChange }
        >
          <option>Selecionar</option>
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
