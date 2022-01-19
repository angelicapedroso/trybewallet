import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MethodInput extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="method-id">
        Método de pagamento:
        <select
          id="method-id"
          name="method"
          value={ method }
          onChange={ handleChange }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodInput.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
