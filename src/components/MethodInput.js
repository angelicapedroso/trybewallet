import React, { Component } from 'react';

export default class MethodInput extends Component {
  render() {
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          data-testid="method-input"
        >
          <option selected="selected" disabled="disabled">Selecionar</option>
          <option value="money">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }
}
