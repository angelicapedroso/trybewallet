import React, { Component } from 'react';

export default class ValueInput extends Component {
  render() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          data-testid="value-input"
          type="number"
          name="value"
        />
      </label>
    );
  }
}
