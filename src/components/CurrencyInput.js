import React, { Component } from 'react';

export default class CurrencyInput extends Component {
  render() {
    return (
      <label htmlFor="currency">
        Moeda:
        <input
          data-testid="currency-input"
          type="text"
          name="currency"
        />
      </label>
    );
  }
}
