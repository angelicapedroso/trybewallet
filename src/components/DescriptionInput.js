import React, { Component } from 'react';

export default class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          data-testid="description-input"
          type="text"
          name="description"
        />
      </label>
    );
  }
}
