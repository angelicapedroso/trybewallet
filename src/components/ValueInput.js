import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValueInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          data-testid="value-input"
          type="number"
          name="value"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
