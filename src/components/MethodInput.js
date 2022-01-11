import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MethodInput extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          value={ method }
          onChange={ handleChange }
          data-testid="method-input"
        >
          <option>Selecionar</option>
          <option value="money">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodInput.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
