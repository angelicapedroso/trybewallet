import React, { Component } from 'react';

export default class CurrencyInput extends Component {
  render() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          data-testid="currency-input"
        >
          <option selected="selected" disabled="disabled">Selecionar</option>
        </select>
      </label>
    );
  }
}
